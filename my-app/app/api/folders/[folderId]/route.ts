import { notFound } from 'next/navigation';
import { folders } from '../folderdata';

type Params = {
  params: Promise<{ folderId: string }>;
};

export async function GET(_req: Request, { params }: Params) {
  const { folderId } = await params;
  const folder = folders.find((f) => f.id === +folderId);
  if (!folder) return Response.json({ code: 404, message: 'page not found' });

  return Response.json(folder);
}

export async function PUT(req: Request, { params }: Params) {
  const { folderId } = await params;
  const folder = folders.find((f) => f.id === +folderId);
  if (!folder) return notFound();

  const body = await req.json();
  folder.title = body.title;

  return Response.json(folders);
}

export async function DELETE(req: Request, { params }: Params) {
  const { folderId } = await params;
  const idx = folders.findIndex((f) => f.id === +folderId);

  if (idx === -1) return notFound();
  folders.splice(idx, 1);

  return Response.json({ msg: 'delete complete' });
}
