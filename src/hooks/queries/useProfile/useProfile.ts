import { useSuspenseQuery } from '@suspensive/react-query';
import { Profile } from '@/types/data';
import { queries } from '@/queries';

const useProfile = () => useSuspenseQuery<Profile | undefined>(queries.user.profile);

export default useProfile;
