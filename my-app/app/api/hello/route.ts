import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  // const nextCookies = await cookies();
  // console.log('🚀 ~ GET ~ nextCookies:', nextCookies);

  // const reqHeaders = new Headers(request.headers);
  // console.log('🚀 ~ GET ~ reqHeaders:', reqHeaders);

  const dbPasswd = process.env.DB_PASSWD;
  console.log('🚀 ~ GET ~ dbPasswd:', dbPasswd);
  console.log('🚀 ~ GET ~ NEXT_PUBLIC_URL:', process.env.NEXT_PUBLIC_URL);

  const nextHeaders = await headers();

  const userAgent = nextHeaders.get('user-agent');
  console.log('🚀 ~ GET ~ userAgent:', userAgent);

  const res = NextResponse.json({
    headers: { 'Custom-Cookie': userAgent!, 'Set-Cookie': 'sid=1123' },
  });

  res.cookies.set('x', '123');
  res.cookies.set('y', '456');

  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 5 * 60 * 1000);

  res.cookies.set('otherCookies', 'ooxx', {
    maxAge: 5 * 60, // 86400
    httpOnly: true,
    path: '/',
    secure: false,
    expires: expireDate,
  });

  return res;
}
