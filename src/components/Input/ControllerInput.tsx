'use client';

import { useController, FieldValues, FieldPath, Control, Controller, useForm } from 'react-hook-form';
import { inputWrapper, input, Size, clearButton } from './Input.css';
import { ForwardedRef, forwardRef } from 'react';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { getIconUrl } from '../IconButton/utils/getIconUrl';

type TControl<T extends FieldValues> = {
	control: Control<T>;
	name: FieldPath<T>;
	placeholder: string;
	size?: Size;
} & React.ComponentPropsWithoutRef<'input'>;

const ControllerInput = forwardRef(function Input(props: TControl<any>, ref: ForwardedRef<HTMLInputElement>) {
	const { control, name, placeholder, size } = props;
	const {
		field: { value, ...rest },
		fieldState,
	} = useController({ name, control });
	const { setValue } = useForm();
	const clear = (name: string) => {
		setValue(name, '', {
			shouldValidate: true,
			shouldDirty: true,
		});
	};

	return (
		<div className={inputWrapper}>
			<Controller
				control={control}
				defaultValue=""
				name={name}
				render={({ field }) => (
					<input {...rest} className={input({ size })} placeholder={placeholder} value={field.value} ref={ref} />
				)}
			/>
			<button
				className={clearButton}
				disabled={!fieldState.isDirty}
				type="reset"
				onClick={() => {
					console.log('clear', name);
					clear(name);
				}}
			>
				<Image src={getIconUrl('clear', 'default')} alt={'Icon'} width={24} height={24} />
			</button>
			<Typography color="red500" variant="label5" as="p">
				{fieldState.error?.message}
			</Typography>
		</div>
	);
});

export default ControllerInput;
