'use client';

import clsx from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { textareaWrapper, inputBase, inputError, Type } from './Input.css';
import Typography from '../Typography/Typography';

type textareaProps = {
	name: string;
	maxLength?: number;
	type?: Type;
} & React.ComponentPropsWithoutRef<'textarea'>;

const TextArea = forwardRef(function TextArea(props: textareaProps, ref: ForwardedRef<HTMLTextAreaElement>) {
	const { formState, watch } = useFormContext();
	const {
		type,
		name,
		placeholder = `소개를 작성해 주세요.
소개를 자세히 작성할수록 사우들의 신청률이 더 높아져요!`,
		maxLength = 2000,
		...rest
	} = props;
	const errorMessage = formState.errors[name]?.message as string;

	return (
		<div className={textareaWrapper}>
			<textarea
				name={name}
				className={clsx(inputBase({ type }), errorMessage && inputError)}
				placeholder={placeholder}
				ref={ref}
				aria-describedby={`${name}-text-area`}
				{...rest}
			></textarea>
			<Typography color="sub" variant="body3" as="p">
				{watch(name)?.length || 0}/{maxLength}
			</Typography>
		</div>
	);
});

export default TextArea;
