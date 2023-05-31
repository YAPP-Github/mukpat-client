import { screen, render } from '@/tests/test-utils';
import { Button } from '@/components';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Button Components Test', () => {
	test('Button text and rendering', () => {
		render(<Button>button test</Button>);
		const button = screen.getByText('button test');
		expect(button).toBeInTheDocument();
	});
	test('Button click event handler', async () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>button test</Button>);
		const button = screen.getByText('button test');
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalled();
	});
	test('Disabled button should not trigger click event', async () => {
		const handleClick = vi.fn();
		render(
			<Button onClick={handleClick} disabled>
				button test
			</Button>,
		);
		const button = screen.getByText('button test');
		await userEvent.click(button);
		expect(handleClick).not.toHaveBeenCalled();
	});
});
