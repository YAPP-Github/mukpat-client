import { useState } from 'react';
import { type SignUpStep } from '../../types/step';
import { EmailVerificationSignUp, EmailRequestSignUp, PasswordSetupSignUp, ProfileSetupSignUp } from '../../components';

export const useStep = (initialStep: SignUpStep) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const setStep = (nextStep: SignUpStep) => {
    setCurrentStep(nextStep);
  };

  const stepComponents = {
    회원가입: EmailRequestSignUp,
    이메일인증: EmailVerificationSignUp,
    비밀번호설정: PasswordSetupSignUp,
    프로필등록: ProfileSetupSignUp,
  };

  const getCurrentComponent = () => {
    return stepComponents[currentStep] || null;
  };

  const onNext = () => {
    const stepKeys: SignUpStep[] = Object.keys(stepComponents) as SignUpStep[];
    const currentStepIndex = stepKeys.indexOf(currentStep);
    const nextStep = stepKeys[currentStepIndex + 1];
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  const CurrentComponent = getCurrentComponent();

  return { currentStep, setStep, onNext, CurrentComponent };
};
