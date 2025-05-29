'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <h1 className='text-2xl mb-10'>{pathname} 페이지를 찾을 수 없습니다!</h1>
      <Button onClick={() => router.back()} variant={'outline'}>
        뒤로가기
      </Button>
    </div>
  );
}
