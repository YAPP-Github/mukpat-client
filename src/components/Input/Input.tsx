'use client';

import cx from 'classnames';
import { RegisterOptions } from 'react-hook-form';
import { inputWrapper, inputContainer, Size } from './Input.css';
import { ForwardedRef, forwardRef } from 'react';
import Typography from '../Typography/Typography';
import { SchemaKeys } from './schema';

export type InputProps = {
	name: SchemaKeys;
	label: string;
	helperText?: string;
	validation?: RegisterOptions;
	size?: Size;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { label, name, placeholder, size, ...rest } = props;
	return (
		<div className={inputContainer({ size })} id={`${name}_input`}>
			<Typography variant="label3" as="label">
				{label}
			</Typography>
			<input name={name} className={inputWrapper({ size })} placeholder={placeholder} ref={ref} {...rest}></input>
		</div>
	);
});

export default Input;
