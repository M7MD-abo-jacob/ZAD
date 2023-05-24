import { NextResponse } from "next/server";

export function middleware(req, event) {
  // TODO: make login with real api data
  // check if user has a token
  const hasToken = req.cookies.get("token");

  // protected routes (personal account)
  if (req.nextUrl.pathname.startsWith("/account")) {
    if (hasToken) {
      // continue to account page if user has token
      return NextResponse.next();
    } else {
      // go to login page if user has no token
      return NextResponse.next();
      // return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // login & register routes
  if (["/login"].includes(req.nextUrl.pathname)) {
    if (hasToken) {
      // go to personal account page if user gets a token
      return NextResponse.redirect(new URL("/account", req.url));
    } else {
      // continue to login page if user has no token
      return NextResponse.redirect(new URL("/account", req.url));
      // return NextResponse.next();
    }
  }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
