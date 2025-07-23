import Link from 'next/link';
import { PropsWithChildren, use } from 'react';
import { getAllFolders } from '@/lib/actions/post-actioins';

export default function BoardLayout({ children }: PropsWithChildren) {
  const folders = use(getAllFolders());
  return (
    <div className='w-[90%] mx-auto'>
      <h1 className='text-2xl text-center'>My Blog</h1>
      <div className='grid grid-cols-3'>
        <div className='border p-3'>
          <h1 className='text-xl'>List</h1>
          <ul>
            {folders.map(({ id, title, _count }) => (
              <li key={id} className='flex justify-between'>
                <Link href={`/board/${id}`}>{title}</Link>{' '}
                <small>{_count.Post}</small>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-span-2'>{children}</div>
      </div>
    </div>
  );
}
