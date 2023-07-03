'use client';
import { Input, InputSection } from '@/components';
import { wrapper, form } from './LoginForm.css';
import { FormProvider, FieldValues, SubmitHandler } from 'react-hook-form';
import { useLogin, useLoginForm } from '@/app/login/hooks';
import { useLoginContext } from '../../contexts/LoginContext';
import { LoginButton } from '../../components';

const LoginForm = () => {
  const loginMutation = useLogin();
  const { keep } = useLoginContext();
  const { fieldErrorMsg, setFieldErrorMsg, method } = useLoginForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const { email, password } = data;
    setFieldErrorMsg('');
    try {
      await loginMutation.mutateAsync({ email, password, keep });
    } catch (error) {
      if (error instanceof Error && 'message' in error) {
        setFieldErrorMsg(error.message);
      }
    }
  };

  return (
    <div className={wrapper}>
      <FormProvider {...method}>
        <form className={form} onSubmit={method.handleSubmit(onSubmit)}>
          <InputSection label="회사 이메일" direction="column">
            <Input {...method.register('email')} name="email" placeholder="회사 이메일" showError={true} fix />
          </InputSection>
          <InputSection label="비밀번호" direction="column">
            <Input
              {...method.register('password')}
              type="password"
              name="password"
              placeholder="비밀번호"
              showError={true}
              fix
            />
          </InputSection>
          {<LoginButton fieldErrorMsg={fieldErrorMsg} />}
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
