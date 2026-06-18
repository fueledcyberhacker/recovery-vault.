import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export type AppRole = "CLIENT" | "ADMIN" | "INVESTIGATOR" | "VAULT_MANAGER";
export type SessionUser = { id: string; email: string; role: AppRole; name: string };
const cookieName = "rv_session";
function secret(){ const value=process.env.JWT_SECRET; if(!value) throw new Error("JWT_SECRET is required"); return value; }
export async function hashPassword(password:string){ return bcrypt.hash(password,12); }
export async function verifyPassword(password:string, hash:string){ return bcrypt.compare(password,hash); }
export function signSession(user:SessionUser){ return jwt.sign(user, secret(), { expiresIn: "8h" }); }
export async function setSessionCookie(token:string){ (await cookies()).set(cookieName, token, { httpOnly:true, sameSite:"lax", secure:process.env.NODE_ENV==="production", path:"/" }); }
export async function getSession(){ const token=(await cookies()).get(cookieName)?.value; if(!token) return null; try { return jwt.verify(token, secret()) as SessionUser; } catch { return null; } }
export function canAccess(role:AppRole, allowed:AppRole[]){ return allowed.includes(role); }
