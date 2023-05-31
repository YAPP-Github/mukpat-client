'use client';

import { HTMLAttributes } from 'react';
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
	const {
		openState: { isOpen, yplacement },
	} = useDropdownContext();

	return (
		<DropdownMenuContextProvider value={{ selectable, selectedKeys, onSelectChange }}>
			{isOpen && (
				<ul className={clsx(menu({ xplacement, yplacement }), className)} {...rest}>
					{children}
				</ul>
			)}
		</DropdownMenuContextProvider>
	);
};

export default DropdownMenu;
