import { useMutation } from '@/hooks';
import { userAPI } from '@/api/user/api';
import { userKeys } from '@/api/user/queryKeys';
import { useQueryClient } from '@tanstack/react-query';

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(userAPI.postLogin, {
    onSuccess: () => {
      void queryClient.invalidateQueries(userKeys.profile());
    },
  });
};

export default useLogin;
