'use client';

import { LiHTMLAttributes, MouseEvent } from 'react';
import { item, checkedIconColor } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';

import clsx from 'classnames';
import { useDropdownMenuContext } from './contexts/DropdownMenuContext';

interface Props extends LiHTMLAttributes<HTMLLIElement> {
	/** ListItem 별로 가지는 고유값 (선택 state 값에 사용됨) */
	label: string;
}

const DropdownItem = ({ children, className, onClick, label, ...rest }: Props) => {
	const { closeDropdown } = useDropdownContext();
	const { selectable, selectedLabel, onSelectChange } = useDropdownMenuContext();

	const handleClickItem = (e: MouseEvent<HTMLLIElement>) => {
		if (selectable) onSelectChange(selectedLabel === label ? null : label);
		onClick?.(e);
		closeDropdown();
	};

	const isSelected = selectable && selectedLabel === label;

	return (
		<li className={clsx(item({ selected: isSelected }), className)} onClick={handleClickItem} {...rest}>
			{children}
			{isSelected && <span className={checkedIconColor}>{'✓'}</span>}
		</li>
	);
};

export default DropdownItem;
