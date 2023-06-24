import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('올바른 이메일을 입력해주세요').min(1, '올바른 이메일을 입력해주세요'),
  password: z
    .string()
    .min(1, '비밀번호는 필수 입력항목 입니다.')
    .min(8, '영문과 숫자를 포함하여 8~20자로 입력해 주세요.')
    .max(20, '영문과 숫자를 포함하여 8~20자로 입력해 주세요.'),
});
