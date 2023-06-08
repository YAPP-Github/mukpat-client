'use client';

import Image from 'next/image';
import { inputWrapper, inputBase, Size, clearButton } from './Input.css';
import { ForwardedRef, forwardRef, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { getIconUrl } from '../IconButton/utils/getIconUrl';
import Typography from '../Typography/Typography';

export type InputProps = {
	name: string;
	size?: Size;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { name, placeholder, size, ...rest } = props;
	const { formState, resetField } = useFormContext();
	const handleReset = useCallback(() => resetField(name, { defaultValue: '', keepDirty: false }), []);
	const errorMessage = formState.errors[name]?.message as string;

	return (
		<>
			<div className={inputWrapper} aria-describedby={`${name} input wrapper`} id={`${name}_input`}>
				<input
					name={name}
					className={inputBase({ size })}
					placeholder={placeholder}
					ref={ref}
					aria-describedby={`${name} input field`}
					{...rest}
				></input>
				{formState.dirtyFields[name] && (
					<button className={clearButton} onClick={handleReset} aria-describedby={`Clear ${name} input`} type="button">
						<Image src={getIconUrl('clear', 'default')} alt={'Icon'} width={24} height={24} />
					</button>
				)}
			</div>
			{formState.errors[name]?.message && (
				<Typography color="red500" variant="label5" as="p">
					{errorMessage}
				</Typography>
			)}
		</>
	);
});

export default Input;
