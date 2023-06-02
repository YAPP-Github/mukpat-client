import { render, renderHook, screen } from '@/tests/test-utils';
import { themeTokens } from '@/styles/theme.css';
import SegmentedControl from './SegmentedControl';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

const data = [
	{ value: '1', label: '1' },
	{ value: '2', label: '2' },
	{ value: '3', label: '3' },
	{ value: '4', label: '4' },
	{ value: '5', label: '5' },
];

const TestComponent = ({
	selectedValue,
	setSelectedValue,
}: {
	selectedValue?: string;
	setSelectedValue?: (value: string) => void;
}) => {
	return <SegmentedControl data={data} value={selectedValue} onChange={setSelectedValue} />;
};

describe('SegmentedControl 테스팅', () => {
	test('data를 넘겨 데이터의 개수만큼 아이템을 렌더링 할 수 있다', () => {
		render(<TestComponent />);
		const items = screen.getAllByRole('listitem');
		expect(items).toHaveLength(data.length);
	});
	test('기본적으로 첫번째 요소가 선택 되어있으며 다른 요소를 클릭하면 그 요소가 선택 대상이 된다.', async () => {
		render(<TestComponent />);
		expect(screen.getByText(data[0].label)).toHaveStyle({ color: themeTokens.color.primary });
		await userEvent.click(screen.getByText(data[2].label));
		expect(screen.getByText(data[2].label)).toHaveStyle({ color: themeTokens.color.primary });
	});
	test('state의 값은 선택된 요소의 value와 같은 값을 가진다.', async () => {
		const { result } = renderHook(() => useState(data[0].value));
		render(<TestComponent selectedValue={result.current[0]} setSelectedValue={result.current[1]} />);
		expect(result.current[0]).toBe(data[0].value);
		await userEvent.click(screen.getByText(data[2].label));
		expect(result.current[0]).toBe(data[2].value);
	});
});
