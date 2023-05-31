'use client';

import { ButtonHTMLAttributes } from 'react';
import { button, buttonText } from './Dropdown.css';
import CaretDownIcon from './Icons/CaretDownIcon';
import DropdownToggle from './DropdownToggle';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** 선택된 요소가 없을때 기본적으로 버튼에 표시할 텍스트 */
	placeholder?: string;
}

const DropdownButton = ({ children = '', placeholder = '선택', onClick, ...rest }: Props) => {
	return (
		<DropdownToggle
			className={button}
			onClick={(e) => {
				onClick?.(e);
			}}
			{...rest}
		>
			<span className={buttonText}>{children ?? placeholder}</span>
			<CaretDownIcon size={24} />
		</DropdownToggle>
	);
};

export default DropdownButton;
