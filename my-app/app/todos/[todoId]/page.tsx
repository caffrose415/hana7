import { use } from 'react';

type Todo = {
  id: number;
  title: string;
};

export const revalidate = 10;

const getTodos = async (todoId: string) => {
  const data = (await fetch(
    `https://jsonplaceholder.typicode.com/posts/${todoId}`
  ).then((res) => res.json())) as Todo;
  return data;
};

const IDS = ['1', '100'];
export const generateStaticParams = () => IDS.map((todoId) => ({ todoId }));

export default function TodoPage({
  params,
}: {
  params: Promise<{ todoId: string }>;
}) {
  const { todoId } = use(params);

  const { id, title } = use(getTodos(todoId));
  return (
    <>
      <h1 className='text-2xl'>TODOS: {id}</h1>
      {title}
    </>
  );
}
