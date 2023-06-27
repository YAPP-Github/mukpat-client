import * as z from 'zod';
import dayjs from 'dayjs';

const now = dayjs().format('YYYY-MM-DD');

export const stepOneSchema = z.object({
  meetingDate: z.coerce
    .string({ invalid_type_error: '필수 입력 항목을 입력해주세요.', required_error: '필수 입력 항목을 입력해주세요.' })
    .default(now),
  meetingTime: z
    .string({ invalid_type_error: '필수 입력 항목을 입력해주세요.', required_error: '필수 입력 항목을 입력해주세요.' })
    .default('12:00'),
  maxApply: z.coerce.number().min(2, { message: '최소 인원은 2명 이상 가능합니다.' }).default(2),
  minAge: z.coerce.number().optional().nullable().default(null),
  maxAge: z.coerce.number().optional().nullable().default(null),
  locationName: z
    .string({ invalid_type_error: '필수 입력 항목을 입력해주세요.', required_error: '필수 입력 항목을 입력해주세요.' })
    .min(5, { message: '5자 이상이어야 합니다.' })
    .max(20, { message: '20자 이하여야 합니다.' }),
  locationDetail: z.string().optional().nullable().default(null),
});

export const stepTwoSchema = z.object({
  title: z
    .string()
    .nonempty({ message: '필수 입력 항목을 입력해주세요.' })
    .min(5, { message: '제목은 5(자)를 넘어야 합니다.' })
    .max(100, { message: '제목은 100(자)를 넘을 수 없습니다.' }),
  content: z
    .optional(
      z
        .string()
        .min(5, { message: '5자 이상이어야 합니다.' })
        .max(2000, { message: '내용은 2000(자)를 넘을 수 없습니다.' }),
    )
    .nullable(),
  chatLink: z
    .string({ invalid_type_error: '필수 입력 항목을 입력해주세요.', required_error: '필수 입력 항목을 입력해주세요.' })
    .url({ message: '올바른 url을 입력해 주세요.' })
    .max(300, { message: '링크는 300(자)를 넘을 수 없습니다.' }),
});

export const postSchema = z.object({});
export type PostSchema = z.infer<typeof postSchema>;

export type StepOneSchema = z.infer<typeof stepOneSchema>;
export type StepTwoSchema = z.infer<typeof stepTwoSchema>;
