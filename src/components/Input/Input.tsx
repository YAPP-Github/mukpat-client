'use client';

import clsx from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { inputWrapper, inputBase, Type, inputError } from './Input.css';

import InputErrorMessage from './InputErrorMessage';
import ClearButton from './ClearButton';

type InputProps = {
	name: string;
	type?: Type;
	showError?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { type, name, placeholder, showError, ...rest } = props;
	const { formState } = useFormContext();

	const errorMessage = formState.errors[name]?.message as string;

	return (
		<div style={{ gridAutoFlow: 'column' }}>
			<div className={inputWrapper} aria-describedby={`${name}-input-wrapper`} id={`${name}_input`}>
				<input
					name={name}
					className={clsx(inputBase({ type }), errorMessage && inputError)}
					placeholder={placeholder}
					ref={ref}
					type={type}
					aria-describedby={`${name}-input-field`}
					{...rest}
				></input>
				<ClearButton name={name} />
			</div>
			<InputErrorMessage name={name} showError={showError} />
		</div>
	);
});

export default Input;
