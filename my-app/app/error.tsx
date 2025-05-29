'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    alert(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <pre style={{ color: 'red' }}>{error.stack || error.message}</pre>
      <Button onClick={() => reset()}>Try again</Button>
      <Button onClick={() => router.back()}>Go Back</Button>
    </div>
  );
}
