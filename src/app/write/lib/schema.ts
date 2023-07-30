import * as z from 'zod';

export const stepOneSchema = z
  .object({
    meetingDate: z
      .date({
        invalid_type_error: '필수 항목을 입력해주세요.',
        required_error: '필수 항목을 입력해주세요.',
      })
      .default(new Date()),
    timezone: z.string().default('오후'),
    meetingTime: z.string().default('12:00'),
    maxApply: z.coerce
      .number()
      .min(2, { message: '최소 인원은 2명 이상 가능합니다.' })
      .max(100, { message: '최대 인원은 100명 이하 가능합니다' })
      .default(2),
    minAge: z.coerce.number().min(20).max(100).optional().nullable().default(null),
    maxAge: z.coerce.number().min(20).max(100).optional().nullable().default(null),
    locationName: z
      .string({
        invalid_type_error: '필수 항목을 입력해주세요.',
        required_error: '필수 항목을 입력해주세요.',
      })
      .nonempty({
        message: '필수 항목을 입력해주세요.',
      }),
    x: z.number(),
    y: z.number(),
    addressName: z.coerce.string(),
    region_1depth_name: z.coerce.string(),
    region_2depth_name: z.coerce.string(),
    locationDetail: z.string().optional().nullable().default(null),
  })
  .refine(
    (arg) => {
      if (arg.minAge && arg.maxAge) {
        return arg.minAge <= arg.maxAge;
      }
      return true;
    },
    { message: '최대 나이는 최소 나이 이상이어야 합니다.', path: ['maxAge'] },
  );

export const stepTwoSchema = z.object({
  title: z
    .string()
    .nonempty({ message: '필수 입력 항목을 입력해주세요.' })
    .min(5, { message: '제목은 5(자)를 넘어야 합니다.' })
    .max(100, { message: '제목은 100(자)를 넘을 수 없습니다.' }),
  content: z.string().nullable().optional(),
  chatLink: z
    .string({ invalid_type_error: '필수 입력 항목을 입력해주세요.', required_error: '필수 입력 항목을 입력해주세요.' })
    .nonempty({ message: '필수 입력 항목을 입력해주세요.' })
    .max(300, { message: '링크는 300(자)를 넘을 수 없습니다.' })
    .regex(new RegExp('https://open.kakao.com/o/[A-Za-z0-9]+'), { message: '올바른 형태의 url을 입력해 주세요.' }),
});

export const boardSchema = stepOneSchema.and(stepTwoSchema);
export type BoardSchema = z.infer<typeof boardSchema>;

export type StepOneSchema = z.infer<typeof stepOneSchema>;
export type StepTwoSchema = z.infer<typeof stepTwoSchema>;
