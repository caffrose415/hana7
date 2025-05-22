import { use } from 'react';

// export const dynamic = 'force-dynamic';

type Props = {
  searchParams: Promise<{ q: string }>;
};
export default function Hello({ searchParams }: Props) {
  const sp = use(searchParams);
  console.log('🚀 ~ Hello ~ sp:', sp);
  return (
    <>
      <h3>Hello {`${new Date()}`}</h3>
    </>
  );
}
