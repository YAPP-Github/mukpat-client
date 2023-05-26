import { useBearStore } from './store';
import { act, renderHook } from '@/tests/test-utils';

describe('store testing', () => {
	const initialStoreState = useBearStore.getState();

	// test 별로 store의 상태를 초기화하는 것이 필수
	beforeEach(() => {
		useBearStore.setState(initialStoreState, true);
	});

	test('should pass', async () => {
		const { result } = renderHook(() => useBearStore());
		act(() => result.current.increase(3));
		expect(result.current.bears).toBe(3);

		act(() => result.current.increase(2));
		expect(result.current.bears).toBe(5);
	});

	test('should pass', async () => {
		const { result } = renderHook(() => useBearStore());
		act(() => result.current.increase(3));
		expect(result.current.bears).toBe(3);

		act(() => result.current.increase(2));
		expect(result.current.bears).toBe(5);
	});
});
