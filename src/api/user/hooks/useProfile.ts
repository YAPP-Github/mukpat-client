import { useQuery } from '@tanstack/react-query';

import { Profile } from '@/api/types';
import { userKeys } from '@/api/user/queryKeys';
import { userAPI } from '../api';

const useProfile = () => {
  return useQuery<Profile | undefined>({
    queryKey: userKeys.profile(),
    queryFn: () => userAPI.getProfile(),
    suspense: false,
    cacheTime: 0,
    retry: 0,
  });
};
export default useProfile;
