import { type Color, Size, buttonWrapper } from './Button.css';
import { HTMLAttributes } from 'react';
import cx from 'classnames';

type Button = {
	disabled?: boolean;
	color: Color;
	size: Size;
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({ children = 'button', size, color, disabled, onClick, className, ...rest }: Button) => {
	return (
		<button
			{...rest}
			className={cx(buttonWrapper({ color, size }), className)}
			disabled={disabled}
			onClick={disabled ? undefined : onClick}
		>
			<div>{children}</div>
		</button>
	);
};

export default Button;
