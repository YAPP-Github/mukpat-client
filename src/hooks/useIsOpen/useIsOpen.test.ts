import { renderHook, act } from '@/tests/test-utils';
import useIsOpen from './useIsOpen';

describe('useOpen testing', () => {
	test('check initial state', () => {
		const { result } = renderHook(() => useIsOpen());
		expect(result.current.isOpen).toBe(false);
	});

	test('execute setIsOpen', () => {
		const { result } = renderHook(() => useIsOpen());
		act(() => {
			result.current.setIsOpen(true);
		});
		expect(result.current.isOpen).toBe(true);
	});
});
