import { request } from '@/utils/ky/request';
import { RequestEmailResponse, VerifyEmailRequest, VerifyEmailResponse } from '../types/verify';

export const postRequestEmail = async ({ email }: { email: string }): Promise<RequestEmailResponse> => {
  return await request
    .post('v1/emails/request', {
      json: {
        email: `${email}@samsung.com`,
      },
    })
    .json<RequestEmailResponse>();
};

export const postVerfiyEmail = async ({
  email,
  verificationCode,
}: VerifyEmailRequest): Promise<VerifyEmailResponse> => {
  return await request
    .post('v1/emails/verify', {
      json: {
        email: `${email}@samsung.com`,
        verificationCode,
      },
    })
    .json<VerifyEmailResponse>();
};
