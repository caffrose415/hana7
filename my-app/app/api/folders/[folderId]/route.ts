import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { FolderParams, folders } from '../folderdata';

// folders/1
export async function GET(req: NextRequest, { params }: FolderParams) {
  const { folderId } = await params;
  const folder = folders.find((f) => f.id === +folderId);
  if (!folder) return notFound();
  return NextResponse.json(folder);
}

export async function PATCH(req: NextRequest, { params }: FolderParams) {
  const { folderId } = await params;
  const folder = folders.find((f) => f.id === +folderId);
  if (!folder) return notFound();

  const { title } = await req.json();
  folder.title = title;
  return NextResponse.json(folder);
}

export async function DELETE(req: NextRequest, { params }: FolderParams) {
  const { folderId } = await params;
  const idx = folders.findIndex((f) => f.id === +folderId);
  if (idx === -1) return notFound();
  folders.splice(idx, 1);
  return NextResponse.json({ msg: 'OK' });
}
