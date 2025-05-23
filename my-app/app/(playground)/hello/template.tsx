import { PropsWithChildren } from 'react';

export default function HelloTemplete({ children }: PropsWithChildren) {
  return <div className='border border-red-500 m-1 p-1'>{children}</div>;
}
