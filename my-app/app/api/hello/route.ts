import { cookies, headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // const { searchParams, host, port, protocol, hostname, pathname, basePath } =
  // request.nextUrl;
  const { host } = request.nextUrl;

  const nextCookies = await cookies();
  // console.log('🚀 reqCookies:', nextCookies);
  const sid = nextCookies.get('sid');
  console.log('🚀 sid:', sid);
  // const reqHeaders = new Headers(request.headers);
  // console.log('🚀 reqHeaders:', reqHeaders);
  const nextHeaders = await headers();
  const userAgent = nextHeaders.get('user-agent');
  console.log('🚀 userAgent:', userAgent);
  const res = NextResponse.json(
    { host },
    {
      headers: { 'Custom-Cookie': userAgent!, 'Set-Cookie': 'sid=1123' },
    }
  );
  // 2025-05-27T15:40:02.076Z
  // 2025-05-27T06:42:17.580Z
  // 2025-05-28T06:37:36.135Z
  res.cookies.set('x', '123');
  res.cookies.set('y', '456');

  // const dbPasswd = process.env.DB_PASSWD;
  // const { DEV_X } = process.env;
  // console.log('🚀 dbPasswd:', dbPasswd);
  // console.log('🚀 DEV_X:', DEV_X);
  // console.log('🚀 NEXT_PUBLIC_x:', process.env.NEXT_PUBLIC_X);
  // console.log('🚀 NEXT_PUBLIC_URL:', process.env.NEXT_PUBLIC_URL);

  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 24 * 60 * 60 * 1000);
  res.cookies.set('otherCookies', 'ooxx', {
    // maxAge: 5 * 60, // 86400
    httpOnly: true,
    path: '/',
    secure: false,
    expires: expireDate,
  });

  return res;

  // return NextResponse.json({
  //   id: 1,
  //   name: '홍길동',
  //   str: searchParams.get('str'),
  //   host,
  //   hostname,
  //   pathname,
  //   basePath,
  //   port,
  //   protocol,
  // });
}

export function POST() {}
