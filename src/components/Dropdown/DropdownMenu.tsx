'use client';

import { HTMLAttributes, useMemo } from 'react';
import clsx from 'classnames';
import { menu, Placement } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';
import { getComputedPlacement } from './utils/placement';

/**
 * @property {Placement} placement? - Menu를 표시할 기준 위치를 선정하는 값
 */
interface Props extends HTMLAttributes<HTMLUListElement>, Partial<DropdownMenuContextValue> {
	placement?: Placement;
}

const DropdownMenu = ({
	children,
	className,
	selectable = false,
	selectedItemKey = null,
	onSelectChange = () => null,
	placement = 'bottom',
	...rest
}: Props) => {
	const { isOpen, yplacement: systemYPlacement, menuRef } = useDropdownContext();

	const menuContextValue = useMemo(
		() => ({ selectable, selectedItemKey, onSelectChange }),
		[selectable, selectedItemKey, onSelectChange],
	);

	const computedPlacement = useMemo(
		() => getComputedPlacement(placement, systemYPlacement),
		[placement, systemYPlacement],
	);

	return (
		<DropdownMenuContextProvider value={menuContextValue}>
			<ul
				aria-hidden={!isOpen}
				id="dropdown-menu"
				role="menu"
				tabIndex={-1}
				ref={menuRef}
				className={clsx(menu({ placement: computedPlacement, open: isOpen }), className)}
				{...rest}
			>
				{children}
			</ul>
		</DropdownMenuContextProvider>
	);
};

export default DropdownMenu;
