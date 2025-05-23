import Link from 'next/link';
import { PropsWithChildren } from 'react';

export default function InterceptLayout({ children }: PropsWithChildren) {
  return (
    <div className='border border-red-300 p-2'>
      <h1>Intercept Layout</h1>
      <div className='flex gap-3'>
        <Link href='/intercept/ic1'>IC1</Link>
        <Link href='/intercept/ic2'>IC2</Link>
        <a href='/intercept/ic3'>IC2</a>
        <Link href='/intercept/ic3'>IC3</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
