import { Profile } from './types';
import { request } from '@/utils/ky/request';

class UserAPI {
  /** 로그인한 유저의 프로필을 조회합니다 */
  async getProfile() {
    return request.get('v1/users/profile').json<Profile | undefined>();
  }
}

export const userAPI = new UserAPI();
