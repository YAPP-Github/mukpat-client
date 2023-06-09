'use client';

import clsx from 'classnames';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { getIconUrl } from '../IconButton/utils/getIconUrl';
import { inputWrapper, inputBase, Type, clearButton, inputError } from './Input.css';
import Typography from '../Typography/Typography';

type InputProps = {
	name: string;
	type?: Type;
} & React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
	const { type, name, placeholder, ...rest } = props;
	const { formState, resetField } = useFormContext();
	const handleReset = useCallback(() => resetField(name, { defaultValue: '', keepDirty: false }), []);
	const errorMessage = formState.errors[name]?.message as string;
	const isDirty = formState.dirtyFields[name];
	return (
		<div style={{ gridAutoFlow: 'column' }}>
			<div className={inputWrapper} aria-describedby={`${name} input wrapper`} id={`${name}_input`}>
				<input
					name={name}
					className={clsx(inputBase({ type }), errorMessage && inputError)}
					placeholder={placeholder}
					ref={ref}
					type={type}
					aria-describedby={`${name}-input-field`}
					{...rest}
				></input>
				{isDirty && (
					<button className={clearButton} onClick={handleReset} aria-describedby={`clear-${name}-button`} type="button">
						<Image src={getIconUrl('clear', 'default')} alt={'Icon'} width={24} height={24} />
					</button>
				)}
			</div>
			{errorMessage && (
				<Typography style={{ marginTop: '8px' }} color="red500" variant="label5" as="p">
					{errorMessage}
				</Typography>
			)}
		</div>
	);
});

export default Input;
