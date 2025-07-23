import { use } from 'react';
import { getFolder } from '@/lib/actions/post-actioins';

type Props = {
  folderId: number;
};
export default function RecentPosts({ folderId }: Props) {
  const folder = use(getFolder(folderId));
  if (!folder?.Post.length) return <></>;
  return (
    <div className='border p-5 m-3'>
      <h1 className='text-xl float-end'>{folder?.title}</h1>
      <ul className='ml-5'>
        {folder?.Post.map((post) => (
          <li key={post.id}>
            {post.id}. {post.title} ({post.writer})
          </li>
        ))}
      </ul>
    </div>
  );
}
