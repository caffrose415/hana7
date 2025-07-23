import { use } from 'react';
import { getFolder } from '@/lib/actions/post-actioins';

type Props = {
  params: Promise<{ folderId: string }>;
};

export default function Folder({ params }: Props) {
  const { folderId } = use(params);
  const folder = use(getFolder(+folderId));

  return (
    <>
      <h1 className='text-2xl'>
        {folderId}. {folder?.title}
      </h1>
      <ul className='ml-5'>
        {folder?.Post.map((post) => (
          <li key={post.id}>
            {post.id}. {post.title} ({post.writer})
          </li>
        ))}
      </ul>
    </>
  );
}
