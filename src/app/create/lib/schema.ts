import * as z from 'zod';
import dayjs from 'dayjs';
const now = dayjs().format('YYYY년 MM월 DD일 (오늘)');

export const stepOneSchema = z.object({
  meetingDate: z.string().default(now),
  meetingTime: z.string().default('12:00'),
  maxApply: z.coerce.number().min(2, { message: '최소 인원은 2명 이상 가능합니다.' }).default(2),
  minAge: z.coerce.number().optional().default(20),
  maxAge: z.coerce.number().optional().default(100),
  // maxAge: z.optional(z.coerce.number().min(20).max(100).optional()),
  locationName: z.string().min(5, { message: '5자 이상이어야 합니다.' }).max(20, { message: '20자 이하여야 합니다.' }),
  // locationDetail: z.optional(z.string().min(5, { message: '5자 이상이어야 합니다.' }).max(20, { message: '20자 이하여야 합니다.' })),
  locationDetail: z.string().optional(),
});

export const stepTwoSchema = z.object({
  title: z
    .string()
    .nonempty()
    .min(5, { message: '제목은 5(자)를 넘어야 합니다.' })
    .max(100, { message: '제목은 100(자)를 넘을 수 없습니다.' }),
  content: z.optional(
    z
      .string()
      .min(5, { message: '5자 이상이어야 합니다.' })
      .max(2000, { message: '내용은 2000(자)를 넘을 수 없습니다.' }),
  ),
  chatLink: z.string().url().max(300, { message: '링크는 300(자)를 넘을 수 없습니다.' }),
});

export const postSchema = z.object({});
export type PostSchema = z.infer<typeof postSchema>;

export type StepOneSchema = z.infer<typeof stepOneSchema>;
export type StepTwoSchema = z.infer<typeof stepTwoSchema>;

// - ${ field_name } 값이 필요합니다.
// - ${ value }는 유효하지 않은 포맷입니다.
// - 최소 나이는 최대 나이보다 작아야 합니다.
// - 제목은 100(자)를 넘을 수 없습니다.
// - 내용은 2000(자)를 넘을 수 없습니다.
// - 링크는 300(자)를 넘을 수 없습니다.
// - 최대 인원은 2명 이상 가능합니다.
