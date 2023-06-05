import * as z from 'zod';

export const joinSchema = z.object({
	email: z.string().email().min(2),
});

export const loginSchema = z.object({
	email: z.string().email().min(2, 'Email is required'),
	password: z
		.string()
		.min(1, '비밀번호는 필수 입력항목 입니다.')
		.min(8, '영문과 숫자를 포함하여 8~20자로 입력해 주세요.')
		.max(20, '영문과 숫자를 포함하여 8~20자로 입력해 주세요.'),
});

export const creationSchema = z.object({
	date: z.string(),
	person: z.string().min(1, { message: '먹팟의 구성원을?' }),
	address: z.string().min(5, { message: '5자 이상이어야 합니다.' }).max(20, { message: '20자 이하여야 합니다.' }),
	title: z.string(),
	info: z.string(),
	url: z.string().url(),
});

export type CreationSchema = z.infer<typeof creationSchema>;
export type SchemaKeys = keyof typeof creationSchema.shape;
