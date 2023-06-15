import { PropsWithChildren } from 'react';
import { SvgIcon } from '@/components';
import { type Variant, checkButton, checkBox, checkBoxText } from './CheckBox.css';
import { getIconId } from './utils';

interface Props extends PropsWithChildren {
	variant?: Variant;
	error?: boolean;
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const CheckBox = ({ variant = 'default', error = false, checked, onChange, children }: Props) => {
	return (
		<div className={checkBox({ variant, error, checked })} onClick={() => onChange(!checked)}>
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
