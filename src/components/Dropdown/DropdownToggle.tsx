'use client';

import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useDropdownContext } from './contexts/DropdownContext';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const DropdownToggle = ({ children, onClick, ...rest }: Props) => {
	const { isOpen, toggleDropdown } = useDropdownContext();

	const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
		toggleDropdown();
		onClick?.(e);
	};

	return (
		<button
			aria-controls="dropdown-menu"
			aria-expanded={isOpen}
			aria-haspopup={true}
			aria-owns="dropdown-menu"
			type="button"
			onClick={handleClickButton}
			{...rest}
		>
			{children}
		</button>
	);
};

export default DropdownToggle;
