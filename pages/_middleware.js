import { NextResponse } from "next/server";

export default async function middleware(req) {
  const { token } = req.cookies;
  const { pathname, origin } = req.nextUrl;

  // ketika belum login
  if (!token) {
    if (pathname !== "/auth/login" && pathname !== "/auth/register" && pathname !== "/"){
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  // ketika sudah login
  if (token) {
    if (pathname === "/auth/login" || pathname === "/auth/register"){
      return NextResponse.redirect(`${origin}/`);
    }
  }
}
