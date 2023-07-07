import { Profile } from './types';
import { request } from '@/utils/ky/request';

class UserAPI {
  /** 로그인한 유저의 프로필을 조회합니다 */
  async getProfile() {
    return request.get('v1/users/profile').json<Profile | undefined>();
  }

  async postLogin({ email, password, keep }: { email: string; password: string; keep: string }) {
    return request
      .post('v1/users/login', {
        json: {
          email,
          password,
          keep,
        },
      })
      .json<Profile | undefined>();
  }

  async postLogout() {
    return request.post('v1/users/logout').json();
  }
}

export const userAPI = new UserAPI();
