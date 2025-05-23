import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

type Props = {
  params: Promise<{ photoId: string }>;
};
export default function Photo({ params }: Props) {
  const { photoId } = use(params);
  const { author, download_url, width, height } = use(
    fetch(`https://picsum.photos/id/${photoId}/info`).then((res) => res.json())
  );

  return (
    <>
      <h1 className='text-3xl'>{author}</h1>
      <div>
        <Image
          src={download_url}
          alt={author}
          width={width}
          height={height}
          priority
        />
      </div>
      <div className='text-right'>
        <div>{download_url}</div>
        <Link href='/photos'>Photo List</Link>
      </div>
    </>
  );
}
