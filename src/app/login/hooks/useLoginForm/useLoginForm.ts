import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../constants/loginSchema';

export const useLoginForm = () => {
  const [fieldErrorMsg, setFieldErrorMsg] = useState('');
  const method = useForm({
    resolver: zodResolver(loginSchema),
  });
  const emailInput = method.watch('email');
  const passwordInput = method.watch('password');

  useEffect(() => {
    setFieldErrorMsg('');
  }, [emailInput, passwordInput]);

  return { fieldErrorMsg, setFieldErrorMsg, method };
};
