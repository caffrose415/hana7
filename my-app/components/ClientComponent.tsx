'use client';

import { useSession } from 'next-auth/react';
import { PropsWithChildren, useState } from 'react';
import { Folder } from '@/lib/folders';

type Props = {
  name: string;
  fAction: () => Promise<Folder[]>;
};

export default function ClientComponent({
  name,
  fAction,
  children,
}: PropsWithChildren<Props>) {
  const { data: session } = useSession();
  console.log('🚀 session:', session);
  const [folders, setFolders] = useState<Folder[]>([]);

  // const plusCount = () => console.log('plus!!!');

  return (
    <>
      <h1 className='text-2xl'>Client Component: {name}</h1>
      {!!session?.user && (
        <h2 className='text-xl'>{session.user.name} loged in</h2>
      )}
      <button
        onClick={async () => {
          const folders = await fAction();
          console.log('🚀 folders:', folders);
          setFolders(folders);
        }}
        className='btn'
      >
        BTN: {folders.map((f) => f.title).join(' | ')}
      </button>
      <hr />
      <div>{children}</div>
    </>
  );
}
