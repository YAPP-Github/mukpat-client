import { type Color, Size, buttonWrapper } from './Button.css';
import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

type Button = {
	color: Color;
	size: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children = 'button', size, color, disabled, onClick, className, ...rest }: Button) => {
	return (
		<button {...rest} className={cx(buttonWrapper({ color, size }), className)} disabled={disabled} onClick={onClick}>
			<div>{children}</div>
		</button>
	);
};

export default Button;
