import { render, screen } from '@/tests/test-utils';
import { Post } from '@/components';
import PostServerComponent from './Post.server';

// 컴포넌트 테스트 예시 코드 2

describe('Test Post components', () => {
	test('Post component can render multiple posts', async () => {
		render(<Post />);

		const listItems = await screen.findAllByText(/post title/i);

		expect(listItems).toHaveLength(3);
	});

	test('post server component testing', async () => {
		const result = await PostServerComponent();
		render(result);

		const listItems = screen.getAllByText(/post title/i);
		expect(listItems).toHaveLength(3);
	});
});
