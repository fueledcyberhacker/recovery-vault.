import { NextResponse, type NextRequest } from "next/server";
const protectedPrefixes = ["/client", "/admin", "/investigations", "/recovery-vault"];
export function middleware(request: NextRequest){ const isProtected=protectedPrefixes.some((p)=>request.nextUrl.pathname.startsWith(p)); if(isProtected && !request.cookies.get("rv_session")){ return NextResponse.redirect(new URL("/login", request.url)); } return NextResponse.next(); }
export const config = { matcher: ["/client/:path*", "/admin/:path*", "/investigations/:path*", "/recovery-vault/:path*"] };
