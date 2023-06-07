import { screen, render } from '@/tests/test-utils';
import { Modal } from '@/components';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Modal Components Test', () => {
	test('isModalOpen 가 true일때 정상적으로 render', () => {
		render(
			<Modal
				size="small"
				isModalOpen={true}
				setIsModalOpen={() => {
					vi.fn();
				}}
			>
				Modal
			</Modal>,
		);

		const modalContent = screen.getByText('Modal');
		expect(modalContent).toBeInTheDocument();
	});

	test('isModalOpen 가 false일때 render되지 않음', () => {
		render(
			<Modal
				size="small"
				isModalOpen={false}
				setIsModalOpen={() => {
					vi.fn();
				}}
			>
				Modal
			</Modal>,
		);

		const modalContent = screen.queryByRole('Modal');
		expect(modalContent).not.toBeInTheDocument();
	});

	test('모달 외부 영역 클릭시 setIsModalOpen 호출', async () => {
		const setIsModalOpenMock = vi.fn();
		render(
			<div>
				<div data-testid="outside-element">Outside Element</div>
				<Modal size="small" isModalOpen={true} setIsModalOpen={setIsModalOpenMock}>
					Modal
				</Modal>
			</div>,
		);

		const outsideElement = screen.getByTestId('outside-element');
		await userEvent.click(outsideElement);
		const modalContent = screen.queryByRole('Modal');
		expect(modalContent).not.toBeInTheDocument();
		expect(setIsModalOpenMock).toHaveBeenCalledWith(false);
	});
});
