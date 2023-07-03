import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../constants/loginSchema';

export const useLoginForm = () => {
  const method = useForm({
    resolver: zodResolver(loginSchema),
  });

  const setFieldError = (message: string) => {
    method.setError('field', {
      message,
    });
  };

  const resetFieldError = () => {
    method.clearErrors('field');
  };

  return { method, errors: method.formState.errors, setFieldError, resetFieldError };
};
