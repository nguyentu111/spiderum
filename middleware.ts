import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { feedsortVals } from "./constants/feed";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";
import { FeedSort } from "./types";
// This function can be marked `async` if using `await` inside
function rewriteUrl(req: NextRequest) {
  //   // if(request.nextUrl.pathname === '/' && !request.nextUrl.searchParams. )

  return null;
}
const { auth } = NextAuth(authConfig);
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.some((val) => val.test(nextUrl.pathname));
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (req.nextUrl.pathname === "/") {
    const sort = req.nextUrl.searchParams.get("sort") as FeedSort;
    const page = req.nextUrl.searchParams.get("page_idx");
    if (!sort || !feedsortVals.includes(sort)) {
      return NextResponse.redirect(new URL(`/?sort=hot&page_idx=1`, req.url));
    }
    if (!page || !Number.parseInt(page)) {
      return NextResponse.redirect(new URL(`/?sort=hot&page_idx=1`, req.url));
    }
  }
  if (req.nextUrl.pathname.startsWith("/category")) {
    const sort = req.nextUrl.searchParams.get("sort");
    const page = req.nextUrl.searchParams.get("page_idx");
    if (!sort || !["hot", "new", "top", "controversial"].includes(sort))
      return NextResponse.redirect(
        new URL(`${req.nextUrl.pathname}?sort=hot&page_idx=1`, req.url)
      );
    if (!page || !Number.parseInt(page)) {
      return NextResponse.redirect(
        new URL(`${req.nextUrl.pathname}?sort=hot&page_idx=1`, req.url)
      );
    }
  }
  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(`/login`, nextUrl));
  }

  return;
});

export const config = {
  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - api (API routes)
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico (favicon file)
  //    */
  //   "/((?!api|_next/static|_next/image|favicon.ico).*)",
  // ],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
