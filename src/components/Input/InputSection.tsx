import clsx from 'classnames';
import { HTMLAttributes } from 'react';
import { section, Direction } from './Input.css';
import Typography from '../Typography/Typography';

type sectionProps = { label: string; direction: Direction } & HTMLAttributes<HTMLInputElement>;

const InputSection = ({ children, label, direction, ...rest }: sectionProps) => {
	const variant = direction === 'column' ? 'title3' : 'label3';
	const color = direction === 'column' ? 'secondary' : 'sub';
	return (
		<div className={clsx(section({ direction }))}>
			<Typography variant={variant} color={color} as="label">
				{label}
			</Typography>
			{children}
		</div>
	);
};

export default InputSection;
