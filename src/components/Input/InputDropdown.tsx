'use client';

import cx from 'classnames';
import { FieldValues, FieldPath, Controller, Control } from 'react-hook-form';
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from '../Dropdown';
import InputErrorMessage from './InputErrorMessage';
import { inputWrapper, inputSize, Size } from './Input.css';
import { HTMLAttributes } from 'react';

type TControl<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	size?: Size;
	showError?: boolean;
	selections?: string[];
} & HTMLAttributes<HTMLDivElement>;

const InputDropdown = ({ ...props }: TControl<any>) => {
	const { name, control, placeholder, showError = true, size, selections = ['default'] } = props;

	return (
		<div className={cx(inputSize({ size }), { inputWrapper })}>
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
