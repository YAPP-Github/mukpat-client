import { screen, render } from '@/tests/test-utils';
import Profile from './Profile';

describe('Profile Component testing', () => {
	test('Profile component rendering', () => {
		render(<Profile uid={28} color={'skyblue'} nickname={'김뭐시기'} />);
		const profile = screen.getByText('김');
		expect(profile).toBeInTheDocument();
	});
});
