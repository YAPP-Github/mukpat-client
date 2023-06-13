import { screen, act, renderHook, waitFor } from '@/tests/test-utils';
import { useOverlay } from '@/hooks';
import Toast from './Toast';
import { OverlayProvider } from '@/providers';

describe('Toast 컴포넌트 테스트', () => {
	test('토스트가 렌더링 되고 지정한 시간 이후에는 해당 요소는 사라진다', async () => {
		const { result } = renderHook(() => useOverlay(), {
			wrapper: OverlayProvider,
		});
		const [openToast, closeToast] = result.current;
		act(() =>
			openToast(<Toast type="warn" message="참여 신청이 완료되었어요!" onClose={closeToast} closeAfter={0.1} />),
		);

		expect(screen.getByText('참여 신청이 완료되었어요!')).toBeInTheDocument();

		await waitFor(() => expect(screen.queryByText('참여 신청이 완료되었어요!')).not.toBeInTheDocument(), {
			timeout: 101,
		});
	});
});
