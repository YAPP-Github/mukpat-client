'use client';

import Image from 'next/image';
import { inputWrapper, input, Size, clearButton } from './Input.css';
import { ForwardedRef, forwardRef } from 'react';
import { getIconUrl } from '../IconButton/utils/getIconUrl';

export type InputProps = {
	name: string;
	size?: Size;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { name, placeholder, size, ...rest } = props;
	return (
		<div className={inputWrapper} aria-describedby={`${name} input wrapper`} id={`${name}_input`}>
			<input
				name={name}
				className={input({ size })}
				placeholder={placeholder}
				ref={ref}
				aria-describedby={`${name} input field`}
				{...rest}
			></input>
			<button className={clearButton} aria-label="Clear input" type="reset">
				<Image src={getIconUrl('clear', 'default')} alt={'Icon'} width={24} height={24} />
			</button>
		</div>
	);
});

export default Input;
