import React from 'react';
import clsx from 'classnames';
import { type Variant, type Color, type Required, typoVariant } from './Typography.css';

type Props = React.HTMLAttributes<HTMLElement> & {
	/** 글자 스타일 variant */
	variant?: Variant;
	/** 글자 색상 */
	color?: Color;
	/** 필수 여부 */
	required?: Required;
	/** Typography로 사용할 html tag */
	as?: 'code' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p' | 'span';
	children: React.ReactNode;
};

const Typography = React.forwardRef<HTMLElement, Props>(
	({ as = 'div', variant = 'body2', color = 'primary', required = false, className = '', children, ...rest }, ref) => {
		return React.createElement(
			as,
			{
				className: clsx(typoVariant({ variant, color, required }), className),
				ref,
				...rest,
			},
			children,
		);
	},
);

Typography.displayName = 'Typography';

export default Typography;
