import {
  FolderPostParams,
  getPostByPostId,
  posts,
} from '@/app/api/folders/folderdata';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

// folders/1/posts/2
export async function GET(req: NextRequest, { params }: FolderPostParams) {
  const { postId } = await params;
  const post = getPostByPostId(postId);
  if (!post) return notFound();
  return NextResponse.json(post);
}

export async function PATCH(req: NextRequest, { params }: FolderPostParams) {
  const { folderId, postId } = await params;
  const post = getPostByPostId(postId);
  if (!post) return notFound();

  const { folder, title, writer, content } = await req.json();
  post.folder = folder || +folderId;
  post.title = title;
  post.writer = writer;
  post.content = content;
  return NextResponse.json(post);
}

export async function DELETE(req: NextRequest, { params }: FolderPostParams) {
  const { postId } = await params;
  const idx = posts.findIndex((p) => p.id === +postId);
  if (idx === -1) return notFound();

  posts.splice(idx, 1);
  return NextResponse.json({ msg: 'OK' });
}
