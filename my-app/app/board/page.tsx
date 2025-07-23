import { use } from 'react';
import { getAllFolders } from '@/lib/actions/post-actioins';
import RecentPosts from './RecentPosts';
import WritePost from './WritePost';

export default function Board() {
  const folders = use(getAllFolders());

  return (
    <>
      <h1 className='text-2xl'>최신 글</h1>
      <div>
        {folders.map(({ id }) => (
          <RecentPosts key={id} folderId={id} />
        ))}
      </div>
      <div>
        <WritePost />
      </div>
    </>
  );
}
