import { NextResponse } from "next/server";

export default async function middleware(req) {
  const { token } = req.cookies;
  const { pathname, origin } = req.nextUrl;

  // ketika belum login
  if (!token) {
    if (
      pathname !== "/" &&
      pathname !== "/auth/login" &&
      pathname !== "/auth/register/worker" &&
      pathname !== "/auth/register/recruiter" &&
      pathname !== "/auth/forgot" &&
      !pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}/auth/login`);
    }
  }

  // ketika sudah login
  if (token) {
    if (
      pathname === "/auth/login" ||
      pathname === "/auth/register/worker" ||
      pathname === "/auth/register/recruiter" ||
      pathname === "/auth/forgot" ||
      pathname.match(/\/auth\/reset\/[\w]*/gi)
    ) {
      return NextResponse.redirect(`${origin}/`);
    }
  }
}
