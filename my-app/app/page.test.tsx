import { render, screen } from '@testing-library/react';
import Home from './page';

test('Home Page Test', async () => {
  // const user = userEvent.setup();

  // const f = vi.fn();

  render(await Home());

  // const btn = screen.getByRole('button', { name: 'ServerBTN' });
  // await user.click(btn);
  // expect(f).toHaveBeenCalledTimes(1);

  expect(screen.getByText(/Global Page/)).toBeInTheDocument();
});
