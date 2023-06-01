'use client';

import { HTMLAttributes, useMemo } from 'react';
import clsx from 'classnames';
import { menu, MenuVariant } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';
import { type DropdownMenuContextValue, DropdownMenuContextProvider } from './contexts/DropdownMenuContext';

type Props = HTMLAttributes<HTMLUListElement> & Partial<DropdownMenuContextValue> & MenuVariant;

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
