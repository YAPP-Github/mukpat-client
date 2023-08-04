import { useSuspenseQuery } from '@suspensive/react-query';

import { Profile } from '@/api/types';
import { userKeys } from '@/api/user/queryKeys';
import { userAPI } from '../api';

const useProfile = () => {
  return useSuspenseQuery<Profile | undefined>({
    queryKey: userKeys.profile(),
    queryFn: () => userAPI.getProfile(),
  });
};
export default useProfile;
