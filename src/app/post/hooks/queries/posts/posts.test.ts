import { renderHook, waitFor, AllProviders } from '@/tests/test-utils';
import { usePostQuery } from './posts';

describe('usePostQueries testing', () => {
	test('check posts data comes properly', async () => {
		const { result } = renderHook(() => usePostQuery(), { wrapper: AllProviders });
		await waitFor(() => expect(result.current.isSuccess).toBe(true));
		expect(result.current.data).toHaveLength(3);
	});
});
