import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define routes that need protection
const isProtectedRoute = createRouteMatcher([
  "/admin(.*)",
  "/saved-cars(.*)",
  "/reservations(.*)",
]);

const middleware = clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export default middleware;

export const config = {
  matcher: [
    "/((?!_next|.*\\..*|favicon.ico|sw.js).*)", // Exclude static files
    "/(api|trpc)(.*)", // Include API routes
  ],
};
