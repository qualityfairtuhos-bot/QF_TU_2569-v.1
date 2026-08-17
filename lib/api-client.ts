import type {ApiResponse} from "./types";
export async function rpc<T>(action:string,args:unknown[]=[]):Promise<T>{
  const response=await fetch("/api/gas",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({action,args,requestId:crypto.randomUUID(),timestamp:Date.now()})});
  const result=await response.json() as ApiResponse<T>;
  if(!response.ok||!result.success)throw new Error(result.message||"เกิดข้อผิดพลาดในการเชื่อมต่อระบบ");
  return result.data as T;
}
