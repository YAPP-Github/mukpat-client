'use client';

import { FieldValues, FieldPath, Controller, Control } from 'react-hook-form';
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from '../Dropdown';
import InputErrorMessage from './InputErrorMessage';
import { inputWrapper } from './Input.css';
import { HTMLAttributes } from 'react';

/**
 * @property {string} name - Input을 구분짓는 고유한 이름입니다. 한 폼안에는 오직 하나의 이름만이 존재해야 합니다. name을 전달해야 form validation이 가능합니다.
 * @property {string} placeholder: Input창에 미리 보여줄 텍스트를 설정합니다.
 * @property {string[]} selections: Dropdown 아이템의 리스트입니다.
 * @property {boolean} showError - 유효성검사에서 해당 Input이 invalid할 경우 error message의 표시 여부를 설정합니다. 기본값은 true입니다.
 */

type TControl<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	showError?: boolean;
	selections?: string[];
} & HTMLAttributes<HTMLDivElement>;

const InputDropdown = ({ ...props }: TControl<any>) => {
	const { name, control, placeholder, showError = true, selections = ['default'] } = props;

	return (
		<div className={inputWrapper}>
			<Controller
				defaultValue={null}
				control={control}
				name={name}
				render={({ field: { value, onChange } }) => (
					<Dropdown>
						<DropdownButton placeholder={placeholder} style={{ width: '100%' }}>
							{value}
						</DropdownButton>
						<DropdownMenu selectable selectedItemKey={value} onSelectChange={onChange}>
							{selections.map((v) => (
								<DropdownItem key={v} itemKey={v}>
									{v}
								</DropdownItem>
							))}
						</DropdownMenu>
					</Dropdown>
				)}
			/>
			<InputErrorMessage name={name} showError={showError} />
		</div>
	);
};

export default InputDropdown;
