import { request } from '@/utils/ky/request';
import { LoginRequest, LoginResponse } from '../types/login';

export const postLogin = async ({ email, password, keep }: LoginRequest): Promise<LoginResponse> => {
  const result = await request
    .post('/api/login', {
      prefixUrl: '',
      json: {
        email,
        password,
        keep,
      },
    })
    .json<LoginResponse>();
  return result;
};
