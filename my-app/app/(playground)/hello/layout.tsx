'use client';

import HelloSearchParams from '@/components/HelloSearchParams';
import Link from 'next/link';
import { PropsWithChildren, Suspense } from 'react';

export default function HelloLayout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>THis is Hello Layout</h1>
      <ul className='flex'>
        <li>
          <Link href='/hello/morning'>Morning</Link>
        </li>
        <li>
          <Link href='/hello/afternoon'>afternoon</Link>
        </li>
        <li>
          <Link href='/hello/evening'>evening</Link>
        </li>
      </ul>
      <hr />
      <Suspense>
        <HelloSearchParams />
      </Suspense>
      <div>{children}</div>
    </>
  );
}
