import { vi } from 'vitest';
import { renderHook, screen, act } from '@/tests/test-utils';
import { OverlayProvider } from '@/hooks/useOverlay/OverlayContext';
import { useOverlay } from '@/hooks';

describe('useOverlay hook 테스팅', () => {
	test('OverlayContext를 wrapping 하지 않은 상태에서 useOverlay 훅을 호출하면 에러가 발생한다', () => {
		const spy = vi.spyOn(console, 'error');
		spy.mockImplementation(() => {
			return;
		});
		expect(() => renderHook(() => useOverlay())).toThrowError(
			'Cannot find OverlayContext. It should be wrapped within OverlayProvider.',
		);
		spy.mockRestore();
	});

	test('open을 호출하면 지정한 요소가 렌더링 되고 close하면 해당 요소는 사라진다.', () => {
		const { result } = renderHook(() => useOverlay(), { wrapper: OverlayProvider });
		const [open, close] = result.current;

		act(() => open(<div>test</div>));
		expect(screen.getByText('test')).toBeInTheDocument();

		act(() => close());
		expect(screen.queryByText('test')).not.toBeInTheDocument();
	});
});
