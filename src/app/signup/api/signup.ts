import { request } from '@/utils/ky/request';
import { SignupRequest, SignupResponse } from '../types/signup';

export const postSignup = async (params: SignupRequest): Promise<SignupResponse> => {
  return await request
    .post('v1/users', {
      json: params,
    })
    .json<SignupResponse>();
};
