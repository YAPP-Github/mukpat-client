import { HTMLAttributes } from 'react';
import { SvgIcon } from '@/components';
import cx from 'classnames';
import { type Variant, checkButton, checkBox, checkBoxText } from './CheckBox.css';
import { getIconId } from './utils';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
	variant?: Variant;
	error?: boolean;
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const CheckBox = ({ variant = 'default', error = false, checked, onChange, children, className, ...rest }: Props) => {
	return (
		<div
			role="checkbox"
			aria-checked={checked}
			className={cx(checkBox({ variant, error, checked }), className)}
			onClick={() => onChange(!checked)}
			tabIndex={0}
			{...rest}
		>
			<SvgIcon id={getIconId({ variant, error, checked })} className={checkButton} width={24} height={24} />
			<label
				className={checkBoxText({
					variant,
					checked,
				})}
			>
				{children}
			</label>
		</div>
	);
};

export default CheckBox;
