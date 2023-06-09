import React, { useState, RefObject } from 'react';
import useMenuYPlacement from './useMenuYPlacement';
import { render, renderHook, screen } from '@/tests/test-utils';
import userEvent from '@testing-library/user-event';

interface Props {
	height?: number;
	toggleRef: RefObject<HTMLButtonElement>;
	menuRef: RefObject<HTMLUListElement>;
	onToggle: () => void;
}

const MENU_HEIGHT = 1000;

const TestComponent = ({ height = 1000, toggleRef, menuRef, onToggle }: Props) => {
	return (
		<div>
			<div style={{ height: `${height}px`, overflow: 'hidden' }}>
				<button data-testid="toggle" ref={toggleRef} onClick={onToggle}>
					toggle
				</button>
				<ul data-testid="menu" ref={menuRef} style={{ height: `${MENU_HEIGHT}px` }}>
					menu
				</ul>
			</div>
		</div>
	);
};

describe('useMenuYPlacement testing', () => {
	test('초기 yplacement는 bottom 이다.', () => {
		const { result: openState } = renderHook(() => useState(false));
		const [isOpen, setIsOpen] = openState.current;

		const { result: placementResult } = renderHook(() => useMenuYPlacement(isOpen));
		const { toggleRef, menuRef, yplacement } = placementResult.current;
		render(<TestComponent toggleRef={toggleRef} menuRef={menuRef} onToggle={() => setIsOpen((o) => !o)} />);

		expect(yplacement).toBe('bottom');
	});
	test('menu의 아래 공간이 충분하면 yplacement는 bottom이 된다.', async () => {
		const { result: openState } = renderHook(() => useState(false));
		const [isOpen, setIsOpen] = openState.current;
		const { result: placementResult } = renderHook(() => useMenuYPlacement(isOpen));
		const { toggleRef, menuRef, yplacement } = placementResult.current;
		render(<TestComponent toggleRef={toggleRef} menuRef={menuRef} onToggle={() => setIsOpen((o) => !o)} />);

		await userEvent.click(screen.getByTestId('toggle'));
		expect(yplacement).toBe('bottom');
	});
});
