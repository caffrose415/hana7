import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  modal: ReactNode;
  profile: ReactNode;
};

export default function example({ children, modal }: PropsWithChildren<Props>) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
