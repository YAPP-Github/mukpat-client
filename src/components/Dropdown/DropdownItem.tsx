'use client';

import { LiHTMLAttributes, MouseEvent } from 'react';
import { item, checkedIconColor } from './Dropdown.css';
import { useDropdownContext } from './contexts/DropdownContext';

import clsx from 'classnames';
import { useDropdownMenuContext } from './contexts/DropdownMenuContext';
import CheckedIcon from './Icons/CheckedIcon';

/**
 * @property {string} itemKey - Item 별로 가지는 고유값 (선택 state 값에 사용됨)
 */
interface Props extends LiHTMLAttributes<HTMLLIElement> {
	itemKey: string;
}

const DropdownItem = ({ children, className, onClick, itemKey, ...rest }: Props) => {
	const { closeDropdown } = useDropdownContext();
	const { selectable, selectedItemKey, onSelectChange } = useDropdownMenuContext();

	const handleClickItem = (e: MouseEvent<HTMLLIElement>) => {
		if (selectable) onSelectChange(selectedItemKey === itemKey ? null : itemKey);
		onClick?.(e);
		closeDropdown();
	};

	const isSelected = selectable && selectedItemKey === itemKey;

	return (
		<li
			className={clsx(item({ selected: isSelected }), className)}
			tabIndex={0}
			role="menuitemradio"
			aria-checked={isSelected}
			onClick={handleClickItem}
			{...rest}
		>
			{children}
			{isSelected && (
				<span className={checkedIconColor} aria-hidden={true}>
					<CheckedIcon />
				</span>
			)}
		</li>
	);
};

export default DropdownItem;
