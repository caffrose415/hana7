export type Book = {
  id: number;
  title: string;
  writer: string;
  msdn?: string;
};

export const books = [
  { id: 1, title: '1st book', writer: 'hong' },
  { id: 2, title: '2nd book', writer: 'kim', msdn: '1234-123412-1212-1211' },
  { id: 3, title: '3rd book', writer: 'lee' },
];
