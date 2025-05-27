import { NextRequest } from 'next/server';
import { folders } from './folderdata';

export async function GET() {
  return Response.json(folders);
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const idx = Math.max(...folders.map(({ id }) => id), 0) + 1;

  const newFolder = { idx, ...body };
  folders.push(newFolder);
  return Response.json(folders);
}
