import { use } from 'react';

/* eslint-disable @next/next/no-html-link-for-pages */
type Props = {
  params: Promise<{ time: string }>;
};

const Times = ['Morning', 'Afternoon', 'Evening', 'Night'];
export async function generateStaticParams() {
  return Times.map((time) => ({ time }));
}

export default function HiIntercept({ params }: Props) {
  const { time } = use(params);

  return (
    <>
      Hi-Intercept
      <div>
        <a href={`/hi/${time}`}>Good {time}</a>
      </div>
    </>
  );
}
