import { screen, render } from '@/tests/test-utils';
import Typography from './Typography';
import { createRef } from 'react';
import { fontWeight100 } from './Typography.test.css';

describe('Typography tests', () => {
	test('as 속성에 맞는 HTML 태그와 children을 렌더링 한다', () => {
		const headingText = 'children text';
		render(
			<>
				<Typography variant="display1" as="h1">
					{headingText}
				</Typography>
			</>,
		);
		const heading1 = screen.getByRole('heading', { level: 1 });
		expect(heading1).toBeInTheDocument();
		expect(heading1).toHaveTextContent(headingText);
	});

	test('ref를 전달할 수 있다', () => {
		const ref = createRef<HTMLElement>();
		render(
			<Typography variant="display1" as="h1" ref={ref}>
				display1
			</Typography>,
		);
		const $target = screen.getByRole('heading', { level: 1 });
		expect(ref.current).toBe($target);
	});

	test('className을 넘겨 스타일을 변경할 수 있다', () => {
		render(
			<Typography variant="display1" as="h1" className={fontWeight100}>
				fontWeight100
			</Typography>,
		);
		const $target = screen.getByRole('heading', { level: 1 });
		expect($target).toHaveStyle({ fontWeight: '100' });
	});
});
