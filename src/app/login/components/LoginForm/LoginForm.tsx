'use client';

import { FormEvent } from 'react';
import { Button, Typography } from '@/components';
import useLoginForm from '@/app/login/hooks/useLoginForm';
import { useRouter } from 'next/navigation';

interface LoginFormData {
	email: { value: string };
	password: { value: string };
}

/** api 테스트를 위한 임시 form입니다 */
const LoginForm = () => {
	const router = useRouter();
	const { handleLogin, error } = useLoginForm(() => router.push('/'));

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = e.target as typeof e.target & LoginFormData;
		await handleLogin(email.value, password.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="email" name="email" placeholder="email" />
				<input type="password" name="password" placeholder="password" />
				<Button size="micro" type="submit">
					로그인
				</Button>
			</form>
			<Typography as="p" color="red500">
				{error?.message}
			</Typography>
		</>
	);
};

export default LoginForm;
