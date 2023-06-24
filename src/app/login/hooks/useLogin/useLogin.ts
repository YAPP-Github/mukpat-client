import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { postLogin } from '@/app/login/api';
import { useRouter } from 'next/navigation';
import { LoginRequest, LoginResponse } from '../../types/login';

export const useLogin = (): UseMutationResult<LoginResponse, unknown, LoginRequest> => {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.replace('/');
  };
  const handleLoginError = (error: unknown) => {
    return error;
  };

  const loginMutation = useMutation<LoginResponse, unknown, LoginRequest>(postLogin, {
    onSuccess: handleLoginSuccess,
    onError: handleLoginError,
  });

  return loginMutation;
};
