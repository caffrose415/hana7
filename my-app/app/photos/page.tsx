import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

type Photo = {
  id: string;
  author: string;
  download_url: string;
};
export default function Photos() {
  const photos: Photo[] = use(
    fetch('https://picsum.photos/v2/list?limit=9').then((res) => res.json())
  );

  return (
    <>
      <h1 className='text-3xl'>Photos</h1>
      <div className='flex flex-wrap justify-center gap-3'>
        {photos.map(({ id, author, download_url }) => (
          <Link
            key={id}
            href={`/photos/${id}`}
            className='opacity-80 hover:opacity-100 scale-95 hover:scale-100'
          >
            <Image
              src={download_url}
              alt={author}
              width={150}
              height={150}
              quality={70}
              // priority
              loading='lazy'
              placeholder='blur'
              blurDataURL='/next.svg'
              unoptimized
            />
          </Link>
        ))}
      </div>
    </>
  );
}
