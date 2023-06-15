import { screen, render } from '@/tests/test-utils';
import { Modal, ModalContent, ModalFooter, ModalHeader, Button } from '@/components';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Modal Components Test', () => {
	test('Modal 전체 정상 동작 확인', async () => {
		const closeModal = vi.fn();

		const { container } = render(
			<Modal onClose={closeModal} size="small">
				<ModalHeader type="info" title="참여신청안내" />
				<ModalContent size="small">이것은 description입니다 </ModalContent>
				<ModalFooter type="single">
					<Button size="small">Button</Button>
				</ModalFooter>
			</Modal>,
		);
		expect(container).toBeInTheDocument();
		expect(screen.getByText('참여신청안내')).toBeInTheDocument();
		expect(screen.getByText('이것은 description입니다')).toBeInTheDocument();

		const button = screen.getByText('Button');
		expect(button).toBeInTheDocument();
	});

	test('ModalFooter에서 single일때 버튼컴포넌트 1개 노출', () => {
		render(
			<ModalFooter type="single">
				<Button size="small">Single Button</Button>
			</ModalFooter>,
		);
		const button = screen.getByText('Single Button');
		expect(button).toBeInTheDocument();

		const buttons = screen.queryAllByText('Single Button');
		expect(buttons.length).toBe(1);
	});
	test('ModalFooter에서 vertical 버튼 2개 노출', () => {
		render(
			<ModalFooter type="vertical">
				<Button size="small">Button 1</Button>
				<Button size="small">Button 2</Button>
			</ModalFooter>,
		);
		const buttons = screen.getAllByText(/Button/);
		expect(buttons.length).toBe(2);
	});
	test('Modal의 외부 영역 클릭시 Modal오버레이가 닫힌다.', async () => {
		const onClose = vi.fn();
		render(
			<div>
				<Modal onClose={onClose}>
					<div>Modal Content</div>
				</Modal>
			</div>,
		);
		expect(screen.getByText('Modal Content')).toBeInTheDocument();
		await userEvent.click(screen.getByTestId('outside'));
		expect(onClose).toHaveBeenCalledTimes(1);
	});
});
