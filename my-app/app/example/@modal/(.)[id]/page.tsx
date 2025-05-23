import Modal from '@/components/Modal';
import Image from 'next/image';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://picsum.photos/id/${id}/info`);
  const photo = await res.json();

  return (
    <Modal>
      <Image
        src={photo.download_url}
        alt='상세 이미지'
        width={600}
        height={600}
      />
    </Modal>
  );
}
