'use client';

import { useController, FieldValues, FieldPath, Control, RegisterOptions } from 'react-hook-form';
import { inputWrapper, inputContainer, Size } from './Input.css';
import { ForwardedRef, forwardRef } from 'react';
import { IconType } from '../IconButton/utils/getIconUrl';
import IconButton from '../IconButton/IconButton';
import Typography from '../Typography/Typography';

type TControl<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	placeholder: string;
	icons: IconType;
	size?: Size;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: TControl<any>, ref: ForwardedRef<HTMLInputElement>) {
	const { control, name, placeholder, icons, size } = props;
	const { field, fieldState } = useController({ name, control });

	return (
		<div className={inputContainer({ size })}>
			<input {...field} className={inputWrapper({ size })} placeholder={placeholder} name={name} ref={ref}></input>
			<IconButton iconType={icons}></IconButton>
			<Typography color="red500" variant="label5" as="p">
				{fieldState.error?.message}
			</Typography>
		</div>
	);
});

export default Input;
