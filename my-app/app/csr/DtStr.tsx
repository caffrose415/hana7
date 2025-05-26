'use client';

import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function DtStr() {
  const [dtStr, setDtStr] = useState(' ');

  const dt = new Date().toString();
  useEffect(() => setDtStr(dt), [dt]);
  return (
    <>
      <h3>{dtStr}</h3>
      <button onClick={() => alert(dtStr)} className='btn-primary'>
        Button
      </button>
      <button className='bg-primary'>Primary</button>
      <Button variant='destructive'>ShadcnButton</Button>
      <Button variant='primary' size='sm'>
        ShadcnButton2
      </Button>
    </>
  );
}
