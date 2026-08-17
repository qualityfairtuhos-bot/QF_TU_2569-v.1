import {randomUUID} from "node:crypto";
import {NextRequest,NextResponse} from "next/server";
import {ALLOWED_ACTIONS,READ_ACTIONS,SESSION_ACTIONS} from "@/lib/actions";
import {clearSessionCookie,setSessionCookie} from "@/lib/auth";
import {GAS_TIMEOUT_MS,MAX_REQUEST_BYTES,SESSION_COOKIE} from "@/lib/config";
import type {ApiResponse,RpcRequest} from "@/lib/types";

export const runtime="nodejs";
export const dynamic="force-dynamic";
const buckets=new Map<string,{count:number;reset:number}>();

// Fast in-memory cache for read-heavy public responses
const memoryCache=new Map<string,{data:ApiResponse<unknown>;expiresAt:number}>();
const CACHEABLE_ACTIONS=new Set(["getPublicBootstrap","getPublicAnnouncement"]);
const CACHE_TTL_MS=60_000; // 60 seconds

function getCachedResponse(action:string,args:unknown[]){
  if(!CACHEABLE_ACTIONS.has(action))return null;
  const key=`${action}:${JSON.stringify(args)}`;
  const item=memoryCache.get(key);
  if(item&&item.expiresAt>Date.now()){
    return item.data;
  }
  if(item)memoryCache.delete(key);
  return null;
}

function setCachedResponse(action:string,args:unknown[],data:ApiResponse<unknown>){
  if(!CACHEABLE_ACTIONS.has(action)||!data.success)return;
  const key=`${action}:${JSON.stringify(args)}`;
  memoryCache.set(key,{data,expiresAt:Date.now()+CACHE_TTL_MS});
}

function invalidateServerCache(action:string){
  // If a write occurs that affects public data or settings, clear memory cache
  if(/saveAdminSettings|submitRegistration|update|import|seed|init/i.test(action)){
    memoryCache.clear();
  }
}

function rateLimited(request:NextRequest){
  const key=request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()??"unknown",now=Date.now(),bucket=buckets.get(key);
  if(!bucket||bucket.reset<now){buckets.set(key,{count:1,reset:now+60_000});return false}
  bucket.count+=1;return bucket.count>180;
}
function failure(message:string,errorCode:string,status:number,requestId:string){
  return NextResponse.json<ApiResponse<never>>({success:false,message,errorCode,requestId},{status});
}
async function callGas(payload:RpcRequest&{secret:string},attempts:number){
  const url=process.env.GAS_WEB_APP_URL;
  if(!url||!/\/exec(?:\?|$)/.test(url))throw new Error("GAS_NOT_CONFIGURED");
  for(let attempt=0;attempt<attempts;attempt+=1){
    const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),GAS_TIMEOUT_MS);
    try{
      const response=await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload),
        redirect:"follow",
        cache:"no-store",
        keepalive:true,
        signal:controller.signal
      });
      if(!response.ok)throw new Error(`GAS_HTTP_${response.status}`);
      const result=JSON.parse(await response.text()) as ApiResponse<unknown>;
      if(typeof result.success!=="boolean")throw new Error("GAS_INVALID_RESPONSE");
      return result;
    }catch(error){if(attempt+1>=attempts)throw error}finally{clearTimeout(timeout)}
  }
  throw new Error("GAS_UNAVAILABLE");
}

export async function POST(request:NextRequest){
  const requestId=randomUUID();
  if(rateLimited(request))return failure("ส่งคำขอบ่อยเกินไป กรุณารอสักครู่","RATE_LIMITED",429,requestId);
  const length=Number(request.headers.get("content-length")??"0");
  if(length>MAX_REQUEST_BYTES)return failure("ข้อมูลหรือไฟล์มีขนาดใหญ่เกินกำหนด","PAYLOAD_TOO_LARGE",413,requestId);
  let input:RpcRequest;
  try{input=await request.json() as RpcRequest}catch{return failure("รูปแบบคำขอไม่ถูกต้อง","INVALID_JSON",400,requestId)}
  const action=typeof input.action==="string"?input.action:"";
  if(!ALLOWED_ACTIONS.has(action))return failure("ไม่อนุญาตให้เรียกคำสั่งนี้","ACTION_NOT_ALLOWED",403,requestId);
  const args=Array.isArray(input.args)?[...input.args]:[];
  if(args.length>20)return failure("จำนวนพารามิเตอร์ไม่ถูกต้อง","VALIDATION_ERROR",400,requestId);

  // Check in-memory cache for fast read actions
  const cached=getCachedResponse(action,args);
  if(cached){
    return NextResponse.json(cached,{status:200,headers:{"X-Cache":"HIT"}});
  }

  if(SESSION_ACTIONS.has(action)){
    const token=request.cookies.get(SESSION_COOKIE)?.value;
    if(!token)return failure("Session หมดอายุ กรุณาเข้าสู่ระบบใหม่","UNAUTHENTICATED",401,requestId);
    if(args.length===0)args.push(token);else args[0]=token;
  }
  const secret=process.env.GAS_API_SECRET;
  if(!secret)return failure("ยังไม่ได้ตั้งค่าการเชื่อมต่อ Backend","SERVER_NOT_CONFIGURED",503,requestId);
  const outbound={action,args,requestId:typeof input.requestId==="string"?input.requestId:requestId,timestamp:Date.now(),secret};
  try{
    const result=await callGas(outbound,READ_ACTIONS.has(action)?2:1);
    if(result.success){
      setCachedResponse(action,args,result);
      invalidateServerCache(action);
    }
    if(action==="loginUser"&&result.success&&result.data&&typeof result.data==="object"){
      const data={...(result.data as Record<string,unknown>)},token=typeof data.token==="string"?data.token:"";
      if(!token)return failure("Backend ไม่ได้คืน Session ที่ถูกต้อง","INVALID_SESSION",502,requestId);
      data.token="__COOKIE__";
      const response=NextResponse.json({...result,data});setSessionCookie(response,token);return response;
    }
    const response=NextResponse.json(result,{status:result.success?200:400});
    if(action==="logoutUser")clearSessionCookie(response);
    return response;
  }catch{return failure("ไม่สามารถเชื่อมต่อระบบส่วนกลางได้ กรุณาลองใหม่","UPSTREAM_ERROR",502,requestId)}
}
