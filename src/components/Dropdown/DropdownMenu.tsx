'use client';

import { HTMLAttributes, useMemo } from 'react';
import clsx from 'classnames';
import { menu, xPlacement } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';

interface Props extends HTMLAttributes<HTMLUListElement>, Partial<DropdownMenuContextValue> {
	/** Menu를 Toggle(Button)기준 왼쪽에 맞추어 보여줄지 오른쪽에 맞추어 보여줄지 결정 */
	xplacement?: xPlacement;
}

const DropdownMenu = ({
	children,
	className,
	selectable = false,
	selectedItemKey = null,
	onSelectChange = () => null,
	xplacement = 'left',
	...rest
}: Props) => {
	const { isOpen, yplacement, menuRef } = useDropdownContext();

	const menuContextValue = useMemo(
		() => ({ selectable, selectedItemKey, onSelectChange }),
		[selectable, selectedItemKey, onSelectChange],
	);

	return (
		<DropdownMenuContextProvider value={menuContextValue}>
			<ul
				aria-hidden={!isOpen}
				id="dropdown-menu"
				role="menu"
				tabIndex={-1}
				ref={menuRef}
				className={clsx(menu({ xplacement, yplacement, open: isOpen }), className)}
				{...rest}
			>
				{children}
			</ul>
		</DropdownMenuContextProvider>
	);
};

export default DropdownMenu;
