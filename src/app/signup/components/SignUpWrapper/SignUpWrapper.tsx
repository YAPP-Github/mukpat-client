'use client';
import { useStep } from '../../hooks';

const SignUpWrapper = () => {
  const INITIAL_PAGE = '회원가입';
  const { onNext, CurrentComponent } = useStep(INITIAL_PAGE);
  return <> {CurrentComponent && <CurrentComponent onNext={onNext} />}</>;
};
export default SignUpWrapper;
