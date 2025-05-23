import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  viewer: ReactNode;
};

export default function PhotosLayout({
  viewer,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      <div>{children}</div>
      {viewer}
    </>
  );
}
