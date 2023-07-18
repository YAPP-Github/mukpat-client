'use client';

import { useLogin } from '@/api/hooks';
import { useLoginRedirect } from '@/hooks';
import { Input, InputSection } from '@/components';
import { wrapper, input, inputSection } from './LoginForm.css';
import { FormProvider, FieldValues, SubmitHandler } from 'react-hook-form';
import { useLoginForm } from '@/app/login/hooks';
import { useLoginContext } from '../../contexts/LoginContext';
import { LoginButton } from '../../components';

const LoginForm = () => {
  const { mutate: login } = useLogin();
  const { redirectBack } = useLoginRedirect();
  const { keep } = useLoginContext();
  const { method, errors, setSubmitError, resetSubmitError } = useLoginForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const { email, password } = data;

    login(
      { email, password, keep },
      {
        onSuccess: () => {
          redirectBack();
        },
        onError: (error) => {
          setSubmitError(error.message);
        },
      },
    );
  };

  return (
    <div className={wrapper}>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <InputSection label="회사 이메일" direction="column" className={inputSection}>
            <Input
              {...method.register('email', {
                onChange: resetSubmitError,
              })}
              name="email"
              placeholder="회사 이메일"
              showError={true}
              className={input}
              fix
            />
          </InputSection>
          <InputSection label="비밀번호" direction="column" className={inputSection}>
            <Input
              {...method.register('password', {
                onChange: resetSubmitError,
              })}
              type="password"
              name="password"
              placeholder="비밀번호"
              showError={true}
              className={input}
              fix
            />
          </InputSection>
          <LoginButton submitErrorMsg={errors?.submit?.message as string} />
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
