import clsx from 'classnames';
import { ReactNode } from 'react';
import { section, Direction } from './Input.css';
import Typography from '../Typography/Typography';

type sectionProps = { required?: boolean; label?: string; direction?: Direction; children: ReactNode };

const InputSection = ({ required, children, label, direction }: sectionProps) => {
	const variant = direction === 'column' ? 'title3' : 'label3';
	const color = direction === 'column' ? 'secondary' : 'sub';
	return (
		<div className={clsx(section({ direction }))}>
			<Typography required={required} variant={variant} color={color} as="label">
				{label}
			</Typography>
			{children}
		</div>
	);
};

export default InputSection;
