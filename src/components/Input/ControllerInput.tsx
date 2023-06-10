'use client';

import clsx from 'classnames';
import { useController, FieldValues, FieldPath, Control, Controller } from 'react-hook-form';
import { inputWrapper, inputBase, Type, inputError } from './Input.css';
import { ForwardedRef, forwardRef } from 'react';
import ClearButton from './ClearButton';
import InputErrorMessage from './InputErrorMessage';

type TControl<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	type?: Type;
	showError?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

const ControllerInput = forwardRef(function Input(props: TControl<any>, ref: ForwardedRef<HTMLInputElement>) {
	const { type, control, name, placeholder = '텍스트를 입력해주세요', showError = true } = props;
	const {
		field: { ...rest },
		fieldState,
	} = useController({ name, control });

	return (
		<div style={{ gridAutoFlow: 'column' }}>
			<div className={inputWrapper}>
				<Controller
					defaultValue=""
					name={name}
					render={({ field }) => (
						<input
							{...rest}
							aria-invalid={fieldState.invalid}
							className={clsx(inputBase({ type }), fieldState.error && inputError)}
							placeholder={placeholder}
							value={field.value}
							type={type}
							ref={ref}
						/>
					)}
				/>
				<ClearButton name={name} />
			</div>
			<InputErrorMessage name={name} showError={showError} />
		</div>
	);
});

export default ControllerInput;
