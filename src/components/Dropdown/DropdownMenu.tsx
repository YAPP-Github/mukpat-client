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

	const contextValue = useMemo(
		() => ({ selectable, selectedItemKey, onSelectChange }),
		[selectable, selectedItemKey, onSelectChange],
	);

	return (
		<DropdownMenuContextProvider value={contextValue}>
			<ul className={clsx(menu({ xplacement, yplacement, open: isOpen }), className)} ref={menuRef} {...rest}>
				{children}
			</ul>
		</DropdownMenuContextProvider>
	);
};

export default DropdownMenu;
