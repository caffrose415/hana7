import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { getWaitUntilPromiseFromEvent } from 'next/dist/server/web/spec-extension/fetch-event';
import { useRef } from 'react';
// import { getFolders } from '@/lib/folders';
import { Button } from './ui/button';
import { Input } from './ui/input';

function Hello({ f }: { f: (email?: string) => void }) {
  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1>Hello Vitest!</h1>
      <Input type='email' ref={emailRef} placeholder='email...' />
      <Button onClick={() => f(emailRef.current?.value)}>Action</Button>
    </>
  );
}

test('Hello test', async () => {
  const user = userEvent.setup();

  const f = vi.fn();
  render(<Hello f={f} />);
  expect(screen.getByText(/Hello Vitest/i)).toBeInTheDocument();

  const inputEmail = screen.getByPlaceholderText('email...');
  await user.type(inputEmail, 'test@example.com');

  const btn = screen.getByRole('button', { name: 'Action' });
  await user.click(btn);

  expect(f).toHaveBeenCalledTimes(1);
  expect(f).toHaveBeenCalledWith('test@example.com');
});
