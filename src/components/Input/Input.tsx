'use client';

import cx from 'classnames';
import { useForm, RegisterOptions } from 'react-hook-form';
import { inputWrapper, Size } from './Input.css';
import { ForwardedRef, forwardRef } from 'react';
import Typography from '../Typography/Typography';

export type InputProps = {
	label: string;
	name: string;
	placeholder?: string;
	helperText?: string;
	readOnly?: boolean;
	validation?: RegisterOptions;
	size?: Size;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const {
		register,
		formState: { errors },
	} = useForm();

	const { label, placeholder, helperText, name, readOnly, validation, size, ...rest } = props;

	return (
		<div>
			<Typography variant="label3" as="label">
				{label}
			</Typography>
			<input
				className={cx(inputWrapper({ size }))}
				{...register(name, validation)}
				placeholder={placeholder}
				type={name}
				name={name}
				readOnly={false}
				{...rest}
			></input>
			{errors.name?.type === 'required' && <p>{helperText}</p>}
		</div>
	);
});

export default Input;
