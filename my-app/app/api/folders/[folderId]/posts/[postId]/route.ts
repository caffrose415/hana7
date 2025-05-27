import { notFound } from 'next/navigation';
import { posts } from '../../../folderdata';

type Params = {
  params: Promise<{ folderId: string; postId: string }>;
};

export async function GET(_req: Request, { params }: Params) {
  const { folderId, postId } = await params;

  const matchPost = posts.find(
    (p) => p.folder === +folderId && p.id === +postId
  );

  return Response.json(matchPost);
}

export async function PUT(req: Request, { params }: Params) {
  const { folderId, postId } = await params;
  const body = await req.json();

  const matchPost = posts.find(
    (p) => p.folder === +folderId && p.id === +postId
  );
  matchPost.title = body.title;
  matchPost.content = body.content;

  return Response.json(matchPost);
}

export async function DELETE(req: Request, { params }: Params) {
  const { folderId, postId } = await params;

  const idx = posts.findIndex(
    (p) => p.folder === +folderId && p.id === +postId
  );
  if (idx === -1) return notFound();

  posts.splice(idx, 1);
  return Response.json({ msg: 'DELETE CLEAR' });
}
