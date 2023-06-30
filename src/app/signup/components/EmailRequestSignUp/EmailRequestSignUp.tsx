'use client';
import { Button, Input, InputSection } from '@/components';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { requiredFields, button, buttonWrapper, inputArea } from './EmailRequestSignUp.css';
import { useSignupContext } from '../../contexts/SignupContext';
import { postRequestEmail } from '../../api';
import { usePostApi, useCommonForm, useConsent } from '../../hooks';
import { emailCodeSchema } from '../../constants/schema';
import { InputField, Title, AgreeButton } from '../../components';
import { wrapper } from '../../styles/common.css';
import { RequestEmailRequest, RequestEmailResponse } from '../../types/verify';

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
  const {
    agree: agreeService,
    error: errorService,
    onClickConsent: onClickChangeConsentService,
    onClickConsentError: onClickConsentErrorService,
  } = useConsent();
  const {
    agree: agreeInformation,
    error: errorInformation,
    onClickConsent: onClickConsentInformation,
    onClickConsentError: onClickConsentErrorInformation,
  } = useConsent();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    !agreeService && onClickConsentErrorService();
    !agreeInformation && onClickConsentErrorInformation();
    if (!agreeService || !agreeInformation) return;
    setUserInfo({ ...userInfo, email: data.email });
    postData(data);
  };

  const errorAgreementMsg = () => (errorService || errorInformation) && '필수 항목에 동의해주세요.';

  return (
    <div className={wrapper}>
      <Title>회원가입</Title>
      <InputField method={method} onSubmit={onSubmit}>
        <InputSection variant="label3" color="sub" label="회사이메일" direction="column" required={true}>
          <div className={inputArea}>
            <div>
              <Input {...method.register('email')} name="email" placeholder="회사 이메일" showError={true} />
            </div>
            <span>@samsung.com</span>
          </div>
          <div className={buttonWrapper}>
            <AgreeButton error={errorService} text="서비스 이용약관" onClick={onClickChangeConsentService} />
            <AgreeButton error={errorInformation} text="개인정보 수집 및 이용" onClick={onClickConsentInformation} />
            <Button size="large" type="submit" className={button}>
              인증 메일 받기
            </Button>
            <div className={requiredFields}>{errorAgreementMsg() || errorMsg || ''}</div>
          </div>
        </InputSection>
      </InputField>
    </div>
  );
};

export default EmailRequestSignUp;
