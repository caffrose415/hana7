import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log('🚀 ~ middleware ~ pathname:', pathname);

  if (pathname.startsWith('/hello/')) {
    const paths = pathname.substring(pathname.lastIndexOf('/'));
    console.log('🚀 ~ middleware ~ paths:', paths);
    return NextResponse.redirect(new URL(`/hi${paths}?x=000`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/hello/:path*', '/api/:path*'],
};

// export const config = {
//   matcher: [
// '/((?!login|regist|_next/static|_next/image|auth|favicon.ico|robots.txt|images|$).*)',
//     '/api/:path*',
//   ],
// };
