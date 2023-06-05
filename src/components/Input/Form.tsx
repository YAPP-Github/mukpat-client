'use client';

import { Fragment, ReactNode } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input, { InputProps } from './Input';
import Button from '../Button/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { type CreationSchema, creationSchema } from './schema';
import { formWrapper } from './Input.css';

type FormProps = {
	children: ReactNode;
} & InputProps;

const Form = ({ children, size }: any) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreationSchema>({
		resolver: zodResolver(creationSchema),
	});

	const onSubmit = (data: CreationSchema) => {
		console.log('submitting');
		console.log(data);
	};

	return (
		<>
			<form className={formWrapper} onSubmit={handleSubmit(onSubmit)}>
				{children.map((child: FormProps, idx: number) => (
					<Fragment key={idx}>
						<Input
							{...register(child.name)}
							label={child.label}
							type={child.type}
							name={child.name}
							placeholder={child.placeholder}
							size={size}
						/>
					</Fragment>
				))}
				<Button type="submit">제출하기</Button>
			</form>
			{errors !== undefined ? <p>필수 입력 정보를 입력해 주세요.</p> : ''}
		</>
	);
};

export default Form;
