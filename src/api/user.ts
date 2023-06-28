import { Profile } from '@/types/data';
import { request } from '@/utils/ky/request';

export const getProfile = async () => await request.get('v1/users/profile').json<Profile | undefined>();
