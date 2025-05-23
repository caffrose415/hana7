import Image from 'next/image';
import Link from 'next/link';

type Photo = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};
export default async function PhotosPage() {
  const res = await fetch('https://picsum.photos/v2/list');
  const photos = await res.json();

  return (
    <div>
      {photos.map((photo: Photo) => (
        <Link key={photo.id} href={`/example/${photo.id}`}>
          <Image src={photo.download_url} alt='' width='160' height='160' />
        </Link>
      ))}
    </div>
  );
}
