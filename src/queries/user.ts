import { getProfile } from '@/api';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const user = createQueryKeys('user', {
  profile: {
    queryKey: ['profile'],
    queryFn: getProfile,
  },
});
