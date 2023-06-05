import useBooleanState from './useBooleanState';

import { act, renderHook } from '@/tests/test-utils';

describe('useBooleanState 테스트', () => {
	test('setTrue 함수를 실행하면 true, setFalse 함수를 실행하면 false 된다.', () => {
		const { result } = renderHook(() => useBooleanState());
		const [, setTrue, setFalse] = result.current;
		{
			act(setTrue);
			const [bool] = result.current;
			expect(bool).toBe(true);
		}
		{
			act(setFalse);
			const [bool] = result.current;
			expect(bool).toBe(false);
		}
	});

	test('toggleDropdown을 실행하면 isOpen 값이 toggle 된다', () => {
		const { result } = renderHook(() => useBooleanState());
		const [, , , toggle] = result.current;
		{
			act(toggle);
			const [bool] = result.current;
			expect(bool).toBe(true);
		}
		{
			act(toggle);
			const [bool] = result.current;
			expect(bool).toBe(false);
		}
	});
});
