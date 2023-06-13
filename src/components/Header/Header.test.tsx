import { vi } from 'vitest';
import Header from './Header';
import { Profile } from '@/types/data';
import { render, screen } from '@/tests/test-utils';

let profileData: Profile | null = { userId: 1, nickName: 'nickName2' };

describe('Header 컴포넌트 테스트', () => {
	beforeAll(() => {
		vi.mock('@/utils/ky/serverRequest', () => ({
			serverRequest: {
				get: () => ({
					json: () => profileData,
				}),
			},
		}));
	});
	test('login 된 상태에서는 먹팟 버튼과 프로필이 보여야 한다.', async () => {
		const header = await Header({});
		render(header);
		expect(screen.getByText('먹팟 만들기')).toBeInTheDocument();
		expect(screen.getByText('N')).toBeInTheDocument();
	});

	test('login이 안된 상태에서는 로그인 버튼이 보여야 한다', async () => {
		profileData = null;
		const header = await Header({});
		render(header);
		expect(screen.getByText('로그인')).toBeInTheDocument();
	});

	test('actionRequired가 false일 때는 action 버튼이 보여지지 않아야 한다.', async () => {
		const header = await Header({ actionRequired: false });
		render(header);
		expect(screen.queryByText('로그인')).not.toBeInTheDocument();
	});
});
