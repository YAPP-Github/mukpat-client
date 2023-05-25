import { render, screen } from '@testing-library/react';
import { Badge } from '@/components';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Badge Component testing', () => {
	test('Badge component rendering', () => {
		render(<Badge color="primary">Badge</Badge>);
		const badge = screen.getByText('Badge');
		expect(badge).toBeInTheDocument();
		expect(badge).toHaveStyle('background-color: purple;');
	});

	const handleClick = vi.fn();

	test('Badge component event handler', async () => {
		render(<Badge onClick={handleClick}>Badge2</Badge>);
		const badge = screen.getByText('Badge2');
		expect(badge).toBeInTheDocument();
		await userEvent.click(badge);
		expect(handleClick).toHaveBeenCalled();
	});
});
