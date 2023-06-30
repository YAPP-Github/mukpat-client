import { useSuspenseQuery } from '@suspensive/react-query';
import { Profile } from '@/api/types';
import { userKeys } from '@/api/user/queryKeys';
import { userAPI } from '../api';

const useProfile = () => useSuspenseQuery<Profile | undefined>(userKeys.profile(), () => userAPI.getProfile());

export default useProfile;
