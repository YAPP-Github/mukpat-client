import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@/hooks';
import { userKeys } from '@/api/user/queryKeys';
import { userAPI } from '@/api/user/api';

const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation(userAPI.postLogout, {
    onSuccess: () => {
      void queryClient.invalidateQueries(userKeys.profile());
    },
  });
};

export default useLogout;
