import { posts } from '../../folderdata';

type Params = {
  params: Promise<{ folderId: string }>;
};

export async function GET(_req: Request, { params }: Params) {
  const { folderId } = await params;
  const post = posts.filter((p) => p.folder === +folderId);

  return Response.json(post);
}

export async function POST(req: Request, { params }: Params) {
  const { folderId } = await params;
  const body = await req.json();
  const id = Math.max(...posts.map((p) => p.id), 0) + 1;

  const newPost = { folder: +folderId, id, ...body };

  posts.push(newPost);
  return Response.json(newPost);
}
