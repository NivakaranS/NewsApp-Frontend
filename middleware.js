import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token'); // Read token from cookies

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login if no token
  }

  return NextResponse.next(); // Allow request if token exists
}

export const config = {
  matcher: [ '/admin/:path*'], // Apply middleware to these routes
};
