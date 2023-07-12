'use client';
import { Typography, Button, BottomButton } from '@/components';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useSignupContext } from '../../contexts/SignupContext';
import clsx from 'classnames';
import { requiredFields, button, description, sendEmail } from './EmailVerificationSignUp.css';
import { postVerfiyEmail, postRequestEmail } from '../../api';
import { usePostApi, useCommonForm } from '../../hooks';
import { verificationCodeSchema } from '../../constants/schema';
import { InputField, InputArea, Title } from '../../components';
import { wrapper } from '../../styles/common.css';
import { RequestEmailRequest, RequestEmailResponse, VerifyEmailRequest, VerifyEmailResponse } from '../../types/verify';
interface EmailVerificationSignUpPropsProps {
  onNext: () => void;
}
const EmailVerificationSignUp = ({ onNext }: EmailVerificationSignUpPropsProps) => {
  const { userInfo } = useSignupContext();
  const verifyEmail = usePostApi<VerifyEmailRequest, VerifyEmailResponse>({
    apiFunction: postVerfiyEmail,
    onSuccess: onNext,
  });
  const requestEmail = usePostApi<RequestEmailRequest, RequestEmailResponse>({ apiFunction: postRequestEmail });
  const { method } = useCommonForm({ schema: verificationCodeSchema, checkMode: 'onSubmit' });
  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    verifyEmail.postData({
      email: userInfo.email,
      verificationCode: data.code,
    });
  };
  const onClickRequsetEmail = () => {
    requestEmail.postData({ email: userInfo.email });
  };
  // button - PC : large / mobile : paddingSmall
  // Title - PC : start / mobile : middle
  return (
    <div className={clsx(wrapper)}>
      <Title textAlign="start">인증 메일을 보냈습니다.</Title>
      <Typography as="p" variant="body2" className={description}>
        인증 코드를 {`${userInfo.email}@samsung`}으로 전송했습니다.
        <br /> 메일 확인 후 인증 코드를 입력해 주세요.
        <br /> 개인정보 보호를 위해 인증 메일은 30분 간 유효합니다.
        <br /> 이메일이 오지 않은 경우, 스팸함을 확인해주세요.
      </Typography>
      <InputField method={method} onSubmit={onSubmit}>
        <InputArea label="인증코드" name="code" placeholder="인증코드 6자리" required={false} method={method} />
        <Button size="large" type="submit" className={button}>
          확인
        </Button>
        <div className={requiredFields}>{verifyEmail?.errorMsg}</div>
        <BottomButton type="submit" errorMsg={verifyEmail?.errorMsg}>
          확인
        </BottomButton>
      </InputField>
      <Button size="large" color="text" type="button" className={sendEmail} onClick={onClickRequsetEmail}>
        이메일 다시 보내기
      </Button>
    </div>
  );
};

export default EmailVerificationSignUp;
