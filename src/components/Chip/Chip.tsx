import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'classnames';
import { wrapper, content, ChipWrapperVariants, ChipContentVariants } from './Chip.css';

type DivElement = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;
type ChipVariants = ChipWrapperVariants & ChipContentVariants & DivElement;

type Props<Variants extends HTMLAttributes<HTMLDivElement>> = {
	[key in keyof Variants]: Variants[key];
} & {
	children: ReactNode;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	className?: string;
};

const Chip = ({
	color = 'grey',
	size = 'md',
	children,
	leftIcon,
	rightIcon,
	className = '',
	...rest
}: Props<ChipVariants>) => {
	return (
		<div className={clsx(wrapper({ color }), className)} {...rest}>
			{leftIcon}
			<span className={content({ size })}>{children}</span>
			{rightIcon}
		</div>
	);
};

export default Chip;
