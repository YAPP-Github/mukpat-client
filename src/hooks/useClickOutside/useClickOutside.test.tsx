import { vi } from 'vitest';
import { screen, render } from '@/tests/test-utils';
import useClickOutside from './useClickOutside';
import userEvent from '@testing-library/user-event';

const TestComponent = ({ handleClickOutside }: { handleClickOutside: () => void }) => {
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: handleClickOutside,
  });

  return (
    <div>
      <div id="overlay-container">overlay</div>
      <div ref={ref}>target</div>
      <div>nontarget</div>
    </div>
  );
};

describe('useClickOutside 테스트', () => {
  test('ref로 지정한 영역 바깥 부분을 누를때 이벤트가 감지된다', async () => {
    const handleClickOutside = vi.fn();
    render(<TestComponent handleClickOutside={handleClickOutside} />);
    const nonTarget = screen.getByText('nontarget');
    await userEvent.click(nonTarget);
    expect(handleClickOutside).toHaveBeenCalled();
  });

  test('ref로 지정한 영역을 누르면 이벤트가 감지되지 않는다', async () => {
    const handleClickOutside = vi.fn();
    render(<TestComponent handleClickOutside={handleClickOutside} />);
    const target = screen.getByText('target');
    await userEvent.click(target);
    expect(handleClickOutside).not.toHaveBeenCalled();
  });

  test('ref로 지정한 대상이 overlay-container에 없는 상황에서 클릭 대상이 overlay-container에 있으면 이벤트는 감지되지 않는다', async () => {
    const handleClickOutside = vi.fn();
    render(<TestComponent handleClickOutside={handleClickOutside} />);
    const target = screen.getByText('overlay');
    await userEvent.click(target);
    expect(handleClickOutside).not.toHaveBeenCalled();
  });
});
