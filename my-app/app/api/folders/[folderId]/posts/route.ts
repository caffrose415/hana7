import { NextRequest, NextResponse } from 'next/server';
import { FolderParams, getPostsByFolderId, posts } from '../../folderdata';

// folders/1/posts
export async function GET(req: NextRequest, { params }: FolderParams) {
  const { folderId } = await params;
  const { searchParams } = req.nextUrl;
  const myPosts = getPostsByFolderId(folderId);
  const results = myPosts.filter((f) =>
    f.title.includes(searchParams.get('q') ?? '')
  );

  return NextResponse.json(results);
}

export async function POST(req: NextRequest, { params }: FolderParams) {
  const { folderId } = await params;
  const body = await req.json();
  const id = Math.max(...posts.map((p) => p.id), 0) + 1;
  const newer = { folder: +folderId, id, ...body };
  posts.push(newer);
  return NextResponse.json(newer);
}
