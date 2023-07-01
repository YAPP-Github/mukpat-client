'use client';
import { Button } from '@/components';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { passwordSchema } from '../../constants/schema';
import { button } from './PasswordSetupSignUp.css';
import { useSignupContext } from '../../contexts/SignupContext';
import { useCommonForm } from '../../hooks';
import { InputField, InputArea, Title } from '../../components';
import { wrapper } from '../../styles/common.css';
interface PasswordSetupSignUpProps {
  onNext: () => void;
}

const PasswordSetupSignUp = ({ onNext }: PasswordSetupSignUpProps) => {
  const { userInfo, setUserInfo } = useSignupContext();
  const { method } = useCommonForm({ schema: passwordSchema, checkMode: 'onChange' });

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    setUserInfo({ ...userInfo, password: data.password });
    onNext();
  };

  return (
    <div className={wrapper}>
      <Title>비밀번호 설정</Title>
      <InputField method={method} onSubmit={onSubmit}>
        <InputArea
          label="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          required={false}
          method={method}
        />
        <InputArea
          label="비밀번호 확인"
          type="password"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          required={false}
          method={method}
        />
        <Button size="large" type="submit" className={button}>
          다음
        </Button>
      </InputField>
    </div>
  );
};

export default PasswordSetupSignUp;
