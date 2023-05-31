'use client';

import { ButtonHTMLAttributes, MouseEvent } from 'react';
import { useDropdownContext } from './contexts/DropdownContext';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const DropdownToggle = ({ children, onClick, ...rest }: Props) => {
	const { toggleRef, toggleDropdown } = useDropdownContext();

	const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
		toggleDropdown();
		onClick?.(e);
	};

	return (
		<button type="button" onClick={handleClickButton} ref={toggleRef} {...rest}>
			{children}
		</button>
	);
};

export default DropdownToggle;
