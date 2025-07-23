'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function My() {
  const { data, state, update } = useSession({ required: true });
  const router = useRouter();
  if (!data?.user?.id) {
    router.push('/auth/signin');
    return;
  }

  const {
    user: { name, email, isadmin },
  } = data;
  return (
    <>
      <h1 className='text-2xl'>내 정보 수정</h1>
    </>
  );
}
