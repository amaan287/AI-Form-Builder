import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard",
  "/dashboard/:path*",
  "/api/form",
  "/api/form/:path*",
  "/api/form/:path*",
  "/api/form/:path*",
  "/api/form/:path*",
  "/api/form/:path*",
  "/api/form/:path*",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId } = auth();
    
    // If user is not signed in, redirect to /signup
    if (!userId) {
      const signUpUrl = new URL('/signup', req.url);
      return NextResponse.redirect(signUpUrl);
    }
    
    // If user is signed in, protect the route as normal
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};