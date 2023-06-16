import { useState, useRef, forwardRef } from 'react';
import { render, renderHook, screen, act } from '@/tests/test-utils';
import Dropdown from './Dropdown';
import DropdownMenu, { DropdownMenuHandle } from './DropdownMenu';
import DropdownItem from './DropdownItem';
import DropdownButton from './DropdownButton';
import userEvent from '@testing-library/user-event';

const selections = [
	'react',
	'typescript',
	'nextjs',
	'vanilla-extract',
	'vanilla-extract2',
	'vanilla-extract3',
	'vanilla-extract4',
	'vanilla-extract5',
	'vanilla-extract6',
	'vanilla-extract7',
	'vanilla-extract8',
];

const DropdownComponent = forwardRef<
	DropdownMenuHandle,
	{
		disabled?: boolean;
		selectable?: boolean;
	}
>(({ disabled = false, selectable = false }, ref) => {
	const [selection, setSelection] = useState<string | null>(null);

	return (
		<div style={{ display: 'flex', gap: '60px' }}>
			<Dropdown>
				<DropdownButton placeholder="Dropdown 버튼" disabled={disabled}>
					{selection}
				</DropdownButton>
				<DropdownMenu selectable={selectable} selectedItemKey={selection} onSelectChange={setSelection} ref={ref}>
					{selections.map((v) => (
						<DropdownItem key={v} itemKey={v}>
							{v}
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
			<button data-testid="outer-button">버튼</button>
		</div>
	);
});

DropdownComponent.displayName = 'DropdownComponent';

describe('Dropdown 컴포넌트 테스트', () => {
	test('Dropdown 기본 동작 테스트', async () => {
		const { result } = renderHook(() => useRef<DropdownMenuHandle>(null));

		// Dropdown 버튼 클릭시 DropdownMenu와 Item들을 볼 수 있다.
		render(<DropdownComponent ref={result.current} />);
		const button = screen.getByRole('button', { name: 'Dropdown 버튼' });
		await userEvent.click(button);

		const menu = screen.getByRole('menu');
		expect(menu).toBeInTheDocument();

		const menuItem = screen.getAllByRole('menuitemradio');
		expect(menuItem).toHaveLength(selections.length);

		// Dropdown의 외부 영역을 클릭하면 DropdownMenu가 닫힌다.
		await userEvent.click(button);
		const outerButton = screen.getByTestId('outer-button');
		await userEvent.click(outerButton);
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();

		// 'Dropdown Item이 클릭되면 DropdownMenu는 닫힌다.
		await userEvent.click(button);
		await userEvent.click(menuItem[0]);
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();

		// ref를 전달하고 ref.close를 호출하면 DropdownMenu를 닫을 수 있다
		act(() => result.current?.current?.close());
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();
	});

	test('Button이 disabled 되면 버튼을 눌러도 DropdownMenu는 열리지 않는다', async () => {
		render(<DropdownComponent disabled />);
		const button = screen.getByRole('button', { name: 'Dropdown 버튼' });
		await userEvent.click(button);
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();
	});

	test('Dropdown Item을 클릭하면 하나의 요소는 선택되어 있으며 취소 가능하다.', async () => {
		render(<DropdownComponent selectable />);

		const button = screen.getByRole('button', { name: 'Dropdown 버튼' });
		await userEvent.click(button);

		// 첫번째 요소를 클릭하여 선택
		await userEvent.click(screen.getAllByRole('menuitemradio')[0]);
		expect(screen.getByRole('button', { name: selections[0] })).toBeInTheDocument();

		await userEvent.click(button);
		// 다시 선택하면 취소 된다.
		await userEvent.click(screen.getAllByRole('menuitemradio')[0]);
		expect(screen.queryByRole('button', { name: selections[0] })).not.toBeInTheDocument();
	});
});
