'use client';

import clsx from 'classnames';
import { useController, FieldValues, FieldPath, Control, Controller, useFormContext } from 'react-hook-form';
import { inputWrapper, inputBase, Type, clearButton, inputError } from './Input.css';
import { ForwardedRef, forwardRef, useCallback } from 'react';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { getIconUrl } from '../IconButton/utils/getIconUrl';

type TControl<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	type?: Type;
} & React.ComponentPropsWithoutRef<'input'>;

const ControllerInput = forwardRef(function Input(props: TControl<any>, ref: ForwardedRef<HTMLInputElement>) {
	const { type, control, name, placeholder = '텍스트를 입력해주세요' } = props;
	const { resetField } = useFormContext();
	const {
		field: { value, ...rest },
		fieldState,
	} = useController({ name, control });
	const handleReset = useCallback(() => resetField(name, { defaultValue: '', keepDirty: false }), []);

	return (
		<>
			<div className={inputWrapper}>
				<Controller
					defaultValue=""
					name={name}
					render={({}) => (
						<input
							{...rest}
							aria-invalid={fieldState.invalid}
							className={clsx(inputBase({ type }), fieldState.error && inputError)}
							placeholder={placeholder}
							value={value}
							type={type}
							ref={ref}
						/>
					)}
				/>
				<button className={clearButton} onClick={handleReset} disabled={!fieldState.isDirty} type="button">
					<Image src={getIconUrl('clear', 'default')} alt={'Icon'} width={24} height={24} />
				</button>
			</div>
			<Typography color="red500" variant="label5" as="p">
				{fieldState.error?.message}
			</Typography>
		</>
	);
});

export default ControllerInput;
