import clsx from 'classnames';
import { ReactNode } from 'react';
import { section, Direction } from './Input.css';
import Typography from '../Typography/Typography';

type sectionProps = { label?: string; direction?: Direction; children: ReactNode };

const InputSection = ({ children, label, direction }: sectionProps) => {
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
