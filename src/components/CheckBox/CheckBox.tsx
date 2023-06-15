import { HTMLAttributes } from 'react';
import { SvgIcon } from '@/components';
import cx from 'classnames';
import { type Variant, checkButton, checkBox, checkBoxText } from './CheckBox.css';
import { getIconId } from './utils';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
	/** 체크 박스와 텍스트만 있는 형태(default) 혹은 배경색이 채워져 있는 형태(filled)를 선택할 수 있습니다. */
	variant?: Variant;
	/** 에러 상태값을 넘겨줍니다. */
	error?: boolean;
	/** 체크 여부 상태값 입니다. */
	checked: boolean;
	/** 체크 여부 상태값을 변화시키는 함수입니다. */
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
