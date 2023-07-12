'use client';
import { useStep } from '../../hooks';
import { Content } from '@/components';
import { SignupContextProvider } from '../../contexts/SignupContext';
import { useIsMobile } from '@/hooks';
const SignUpWrapper = () => {
  const INITIAL_PAGE = '회원가입';
  const { onNext, CurrentComponent } = useStep(INITIAL_PAGE);
  const mobile = useIsMobile();
  return (
    <>
      <Content verticalCenter={mobile ? false : true}>
        <SignupContextProvider>{CurrentComponent && <CurrentComponent onNext={onNext} />}</SignupContextProvider>
      </Content>
    </>
  );
};
export default SignUpWrapper;
