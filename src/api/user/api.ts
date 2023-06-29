import { request } from '@/utils/ky/request';
import { KyInstance } from 'ky/distribution/types/ky';
import { Profile } from './types';

// api fetchers
class UserAPI {
  request: KyInstance;

  /** 로그인한 유저의 프로필을 조회합니다 */
  constructor(request: KyInstance) {
    this.request = request;
  }

  async getProfile() {
    return await this.request('v1/users/profile').json<Profile | undefined>();
  }
}

export const userAPI = new UserAPI(request);
