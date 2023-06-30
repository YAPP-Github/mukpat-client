import { screen, render } from '@/tests/test-utils';
import IconButton from './IconButton';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('IconButton Components Test', () => {
  test('클릭이벤트 핸들러 실행', async () => {
    const handleClick = vi.fn();
    render(<IconButton iconType="check" onClick={handleClick} />);
    const button = screen.getByTestId('icon-button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
