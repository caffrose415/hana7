import { use } from 'react';

type Props = {
  params: Promise<{ time: string }>;
};

const Times = ['Morning', 'Afternoon', 'Evening', 'Night'];
export async function generateStaticParams() {
  return Times.map((time) => ({ time }));
}
export default function Time({ params }: Props) {
  const { time } = use(params);
  //   const [firstChar, ...timeStr] = time;

  return (
    <>
      Good <span className='capitalize'>{time}</span>
      {/* Good{firstChar.toUpperCase()}
      {timeStr}~ */}
    </>
  );
}
