import useDropdownOpenState from './useDropdownOpenState';

import { act, renderHook } from '@/tests/test-utils';

describe('useDropdownOpenState 테스트', () => {
	test('openState.isOpen의 초기값은 false다', () => {
		const { result } = renderHook(() => useDropdownOpenState());
		expect(result.current.isOpen).toBe(false);
	});

	test('closeDropdown을 실행하면 isOpen값은 false가 된다.', () => {
		const { result } = renderHook(() => useDropdownOpenState());
		act(() => {
			result.current.closeDropdown();
		});
		expect(result.current.isOpen).toBe(false);
	});

	test('toggleDropdown을 실행하면 isOpen 값이 toggle 된다', () => {
		const { result } = renderHook(() => useDropdownOpenState());
		act(() => result.current.toggleDropdown());
		expect(result.current.isOpen).toBe(true);
		act(() => result.current.toggleDropdown());
		expect(result.current.isOpen).toBe(false);
	});
});
