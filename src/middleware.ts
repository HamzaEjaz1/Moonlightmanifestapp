import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/screens") ||
    pathname.startsWith("/opengraph-image") ||
    pathname.startsWith("/brand")
  ) {
    return NextResponse.next();
  }
  const first = pathname.split("/")[1] ?? "";

  if (!isLocale(first)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  const headers = new Headers(request.headers);
  headers.set("x-locale", first);
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
