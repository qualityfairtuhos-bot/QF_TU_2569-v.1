import type {NextResponse} from "next/server";
import {SESSION_COOKIE} from "./config";
export function setSessionCookie(response:NextResponse,token:string){response.cookies.set(SESSION_COOKIE,token,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*12})}
export function clearSessionCookie(response:NextResponse){response.cookies.set(SESSION_COOKIE,"",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:0})}
