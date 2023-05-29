import React from 'react';
import clsx from 'classnames';
import { type TypoVariant, typoVariant } from './Typography.css';

type Props = React.HTMLAttributes<HTMLElement> & {
	as?: 'code' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';
	children: React.ReactNode;
	className?: string;
} & TypoVariant;

const Typography = React.forwardRef<HTMLElement, Props>(
	({ as = 'div', variant = 'body2', color = 'primary', className = '', children, ...rest }, ref) => {
		return React.createElement(
			as,
			{
				className: clsx(typoVariant({ variant, color }), className),
				ref,
				...rest,
			},
			children,
		);
	},
);

Typography.displayName = 'Typography';

export default Typography;
