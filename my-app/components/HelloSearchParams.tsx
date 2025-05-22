'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';

export default function HelloSearchParams() {
  const [state, setState] = useState(' ');
  const sparams = useSearchParams();

  useLayoutEffect(() => {
    setState(sparams.get('q') ?? ' ');
  }, [sparams]);
  console.log('🚀 ~ HelloSearchParams ~ state:', state);

  const router = useRouter();
  const pathname = usePathname();
  console.log('🚀 ~ HelloLayout ~ pathname:', pathname);

  const urlParams = new URLSearchParams(sparams.toString());

  const setSearchParams = () => {
    urlParams.set('q', '*****************');
    router.push(`/hello?${urlParams.toString()}`);
  };
  return (
    <>
      <button onClick={setSearchParams}>SETPARAM</button>
    </>
  );
}
