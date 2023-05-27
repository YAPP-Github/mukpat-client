import cx from 'classnames';
import { HTMLAttributes } from 'react';

import { type BadgeVariants, wrapper } from './Badge.css';

type BadgeProps = BadgeVariants & HTMLAttributes<HTMLDivElement>;

const Badge = ({
	children,
	color = 'primary',
	shape = 'rounded',
	hoverable = false,
	variant = 'filled',
	...rest
}: BadgeProps) => {
	return (
		<div className={cx(wrapper({ color, shape, hoverable, variant }))} {...rest} data-testid="badge">
			{children}
		</div>
	);
};

export default Badge;
