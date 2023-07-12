'use client';
import { Button, Input, InputSection, BottomButton } from '@/components';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { requiredFields, button, buttonWrapper, inputArea, input } from './EmailRequestSignUp.css';
import { useSignupContext } from '../../contexts/SignupContext';
import { postRequestEmail } from '../../api';
import { usePostApi, useCommonForm, useConsent } from '../../hooks';
import { emailCodeSchema } from '../../constants/schema';
import { InputField, Title, AgreeButton } from '../../components';
import { wrapper } from '../../styles/common.css';
import { RequestEmailRequest, RequestEmailResponse } from '../../types/verify';
import clsx from 'classnames';

interface EmailRequestSignUpProps {
  onNext: () => void;
}
const EmailRequestSignUp = ({ onNext }: EmailRequestSignUpProps) => {
  const { userInfo, setUserInfo } = useSignupContext();
  const { errorMsg, postData } = usePostApi<RequestEmailRequest, RequestEmailResponse>({
    apiFunction: postRequestEmail,
    onSuccess: onNext,
  });
  const { method } = useCommonForm({ schema: emailCodeSchema, checkMode: 'onSubmit' });
  const [agreeService, errorService, onClickService, onClickErrorService] = useConsent();
  const [agreePrivacy, errorPrivacy, onClickPrivacy, onClickErrorPrivacy] = useConsent();
  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    !agreeService && onClickErrorService();
    !agreePrivacy && onClickErrorPrivacy();
    if (!agreeService || !agreePrivacy) return;
    setUserInfo({ ...userInfo, email: data.email });
    postData({ email: data.email });
  };

  const errorAgreementMsg = () => (errorService || errorPrivacy) && '필수 항목에 동의해주세요.';

  return (
    <div className={clsx(wrapper)}>
      <Title>회원가입</Title>
      <InputField method={method} onSubmit={onSubmit}>
        <InputSection variant="label3" color="sub" label="회사이메일" direction="column" required={true}>
          <div className={inputArea}>
            <div className={input}>
              <Input
                {...method.register('email')}
                name="email"
                placeholder="회사 이메일"
                showError={true}
                className={input}
                fix
              />
            </div>
            <span>@samsung.com</span>
          </div>
          <div className={buttonWrapper}>
            <AgreeButton error={errorService} text="서비스 이용약관" name="service" onClick={onClickService} />
            <AgreeButton error={errorPrivacy} text="개인정보 수집 및 이용" name="privacy" onClick={onClickPrivacy} />
            <Button size="large" type="submit" className={button}>
              인증 메일 받기
            </Button>
            <BottomButton type="submit" errorMsg={errorAgreementMsg() || errorMsg || ''}>
              인증 메일 받기
            </BottomButton>
            <div className={requiredFields}>{errorAgreementMsg() || errorMsg || ''}</div>
          </div>
        </InputSection>
      </InputField>
    </div>
  );
};

export default EmailRequestSignUp;
