'use client';

import Image from 'next/image';
import { inputWrapper, input, Size, clearButton } from './Input.css';
import { ForwardedRef, forwardRef } from 'react';
import Typography from '../Typography/Typography';
import { SchemaKeys } from './schema';
import { getIconUrl } from '../IconButton/utils/getIconUrl';

export type InputProps = {
	name: SchemaKeys;
	label?: string;
	size?: Size;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { label, name, placeholder, size, ...rest } = props;
	return (
		<div className={inputWrapper} id={`${name}_input`}>
			{label && (
				<Typography variant="label3" as="label">
					{label}
				</Typography>
			)}
			<input name={name} className={input({ size })} placeholder={placeholder} ref={ref} {...rest}></input>
			<button className={clearButton} type="reset">
				<Image src={getIconUrl('clear', 'default')} alt={'Icon'} width={24} height={24} />
			</button>
		</div>
	);
});

export default Input;
