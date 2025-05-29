import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ServerComponent from './ServerComponent';

test('server-component', async () => {
  const user = userEvent.setup();

  const f = vi.fn();

  render(await ServerComponent({ f }));

  const btn = screen.getByRole('button', { name: 'ServerBTN' });
  await user.click(btn);

  expect(f).toHaveBeenCalledTimes(1);
});
