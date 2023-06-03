'use client';

import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import { InputProps } from './Input';
import Button from '../Button/Button';

type FormProps = {
	children: ReactNode;
} & InputProps;

const Form = ({ children, size }: any) => {
	const { handleSubmit } = useForm();
	const onSubmit = handleSubmit((data) => {
		console.log('submitting');
		console.log(data);
	});

	return (
		<form onSubmit={onSubmit}>
			{children.map((child: FormProps, idx: number) => (
				<Input
					key={idx}
					label={child.name}
					name={child.name}
					placeholder={child.placeholder}
					validation={child.validation}
					readOnly={false}
					size={size}
				/>
			))}
			<Button type="submit">제출하기</Button>
		</form>
	);
};

export default Form;
