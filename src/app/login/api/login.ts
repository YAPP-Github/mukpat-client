import { request } from '@/utils/ky/request';
import { LoginRequest, LoginResponse } from '../types/login';

export const postLogin = async ({ email, password, keep }: LoginRequest): Promise<LoginResponse> => {
  const result = await request
    .post('v1/users/login', {
      json: {
        email,
        password,
        keep,
      },
    })
    .json<LoginResponse>();
  return result;
};
