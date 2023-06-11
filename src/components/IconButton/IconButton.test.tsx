import { screen, render } from '@/tests/test-utils';
import IconButton from './IconButton';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { getIconUrl } from '@/utils/getIconUrl';

describe('IconButton Components Test', () => {
	test('아이콘 렌더링', () => {
		render(<IconButton iconType="check" />);
		const icon = screen.getByAltText('Icon');
		const expectedUrl = getIconUrl('check', 'default');

		expect(icon).toHaveAttribute('src', expectedUrl);
	});
	test('클릭이벤트 핸들러 실행', async () => {
		const handleClick = vi.fn();
		render(<IconButton iconType="check" onClick={handleClick} />);
		const button = screen.getByTestId('icon-button');
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
	test('버튼 상태에따라 다른 URL 변경', async () => {
		render(<IconButton iconType="check" active={false} />);
		const icon = screen.getByAltText('Icon');
		const expectedUrl = getIconUrl('check', 'default');
		expect(icon).toHaveAttribute('src', expectedUrl);

		await userEvent.hover(screen.getByTestId('icon-button'));
		const hoverUrl = getIconUrl('check', 'hover');
		expect(icon).toHaveAttribute('src', hoverUrl);

		await userEvent.unhover(screen.getByTestId('icon-button'));
		expect(icon).toHaveAttribute('src', expectedUrl);
	});
});
