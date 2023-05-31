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
	selectedKeys = [],
	onSelectChange = () => null,
	xplacement = 'left',
	...rest
}: Props) => {
	const { isOpen, yplacement, menuRef } = useDropdownContext();

	const contextValue = useMemo(
		() => ({ selectable, selectedKeys, onSelectChange }),
		[selectable, selectedKeys, onSelectChange],
	);

	return (
		<DropdownMenuContextProvider value={contextValue}>
			{isOpen && (
				<ul className={clsx(menu({ xplacement, yplacement }), className)} ref={menuRef} {...rest}>
					{children}
				</ul>
			)}
		</DropdownMenuContextProvider>
	);
};

export default DropdownMenu;
