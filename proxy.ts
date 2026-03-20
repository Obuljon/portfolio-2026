import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Agar manzil aynan '/home' bo'lsa, uni '/' ga yo'naltiramiz
  if (pathname === '/home') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Boshqa barcha holatlarda so'rovni odatdagidek davom ettiramiz
  return NextResponse.next();
}

// Config qismi juda muhim, u faqat kerakli manzillarda middleware-ni ishga tushiradi
export const config = {
  matcher: ['/home'], // Middleware faqat /home manziliga kirganda ishlaydi
}