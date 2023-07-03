import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../constants/loginSchema';

export const useLoginForm = () => {
  const method = useForm({
    resolver: zodResolver(loginSchema),
  });

  const setSubmitError = (message: string) => {
    method.setError('submit', {
      message,
    });
  };

  const resetSubmitError = () => {
    method.clearErrors('submit');
  };

  return { method, errors: method.formState.errors, setSubmitError, resetSubmitError };
};
