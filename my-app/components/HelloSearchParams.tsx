'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

export default function HelloSearchParams() {
  const [state, setState] = useState('');
  const sparams = useSearchParams();
  // console.log('🚀 sparams:', sparams.get('q'));
  useLayoutEffect(() => {
    setState(sparams.get('q') ?? '');
  }, [sparams]);

  // const dbPasswd = process.env.DB_PASSWD;
  // const { DEV_X } = process.env;
  // console.log('🚀 dbPasswd:', dbPasswd);
  // console.log('🚀 DEV_X:', DEV_X);
  // console.log('🚀 NEXT_PUBLIC_x:', process.env.NEXT_PUBLIC_X);
  // console.log('🚀 NEXT_PUBLIC_URL:', process.env.NEXT_PUBLIC_URL);

  const router = useRouter();
  // const pathname = usePathname();
  // console.log('🚀 pathname:', pathname);
  const setSearchParams = () => {
    const urlParams = new URLSearchParams(sparams.toString());
    urlParams.set('q', `${new Date()}`); // q=****
    urlParams.set('r', `rrr`);
    router.push(`/hello?${urlParams.toString()}`);
  };

  return (
    <>
      <h1>This is Hello Layout: {state}</h1>
      <button onClick={setSearchParams}>SetParam</button>
    </>
  );
}
