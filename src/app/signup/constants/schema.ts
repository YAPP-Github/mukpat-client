import { z } from 'zod';

export const emailCodeSchema = z.object({
  email: z.string().min(1, '필수 입력 정보를 입력해주세요.'),
});
export const verificationCodeSchema = z.object({
  code: z.string().min(1, '필수 입력 정보를 입력해주세요.'),
});
export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(1, '필수 입력 정보를 입력해 주세요.')
      .refine(
        (value) => /^(?=.*[a-zA-Z])(?=.*\d).{8,20}$/.test(value),
        '영문과 숫자를 포함하여 8~20자로 입력해 주세요.',
      ),
    passwordCheck: z.string().min(1, '필수 입력 정보를 입력해 주세요.'),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });
export const signupSchema = z.object({
  nickname: z.string().min(2, '2-10자로 입력해 주세요.').max(10, '2-10자로 입력해 주세요.'),
  job: z.string().min(0, '10자 이하로 입력해주세요.').max(10, '10자 이하로 입력해주세요.'),
});
