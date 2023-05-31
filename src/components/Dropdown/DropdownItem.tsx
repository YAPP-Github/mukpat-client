'use client';

import { LiHTMLAttributes, MouseEvent } from 'react';
import { item, checkedIconColor } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';

import clsx from 'classnames';
import { useDropdownMenuContext } from './contexts/DropdownMenuContext';

interface Props extends LiHTMLAttributes<HTMLLIElement> {
	/** ListItem 별로 가지는 고유값 */
	label: string;
}

const DropdownItem = ({ children, className, onClick, label, ...rest }: Props) => {
	const { closeDropdown } = useDropdownContext();
	const { selectable, selectedKeys, onSelectChange } = useDropdownMenuContext();
	const selectedKeysSet = new Set(selectedKeys);

	const handleClickItem = (label: string) => (e: MouseEvent<HTMLLIElement>) => {
		if (selectable) onSelectChange(selectedKeysSet.has(label) ? [] : [label]);
		onClick?.(e);
		closeDropdown();
	};

	const isSelected = selectable && selectedKeysSet.has(label);

	return (
		<li className={clsx(item({ selected: isSelected }), className)} onClick={handleClickItem(label)} {...rest}>
			{children}
			{isSelected && <span className={checkedIconColor}>{'✓'}</span>}
		</li>
	);
};

export default DropdownItem;
