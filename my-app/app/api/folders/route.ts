import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { folders } from './folderdata';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  console.log('********', searchParams.get('q'));

  const results = folders.filter((f) =>
    f.title.includes(searchParams.get('q') ?? '')
  );

  const h = await headers();
  h.set('');
  return NextResponse.json(results);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const id = Math.max(...folders.map((f) => f.id), 0) + 1;
  const newer = { id, ...body };
  folders.push(newer);
  return NextResponse.json(newer);
}
