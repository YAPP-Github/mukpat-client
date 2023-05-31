'use client';

import { LiHTMLAttributes, MouseEvent, useEffect, useRef } from 'react';
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
	const itemRef = useRef<HTMLLIElement>(null);

	const handleClickItem = (label: string) => (e: MouseEvent<HTMLLIElement>) => {
		if (selectable) onSelectChange(selectedKeysSet.has(label) ? [] : [label]);
		onClick?.(e);
		closeDropdown();
	};

	const isSelected = selectable && selectedKeysSet.has(label);

	useEffect(() => {
		if (!isSelected || !itemRef.current) return;
		itemRef.current.scrollIntoView({ block: 'center' });
	}, [isSelected]);

	return (
		<li
			className={clsx(item({ selected: isSelected }), className)}
			onClick={handleClickItem(label)}
			ref={itemRef}
			{...rest}
		>
			{children}
			{isSelected && <span className={checkedIconColor}>{'✓'}</span>}
		</li>
	);
};

export default DropdownItem;
