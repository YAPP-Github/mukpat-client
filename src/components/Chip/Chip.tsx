import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'classnames';
import { wrapper, content, ChipWrapperVariants, ChipContentVariants } from './Chip.css';

type Props = ChipWrapperVariants &
	ChipContentVariants & {
		children: ReactNode;
		leftIcon?: ReactNode;
		rightIcon?: ReactNode;
	} & HTMLAttributes<HTMLDivElement>;

const Chip = ({ color = 'grey', size = 'md', children, leftIcon, rightIcon, className, ...rest }: Props) => {
	return (
		<div className={clsx(wrapper({ color }), className)} {...rest}>
			{leftIcon}
			<span className={content({ size })}>{children}</span>
			{rightIcon}
		</div>
	);
};

export default Chip;
