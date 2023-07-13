'use client';
import FirstStep from './components/Form/FirstStep';
import SecondStep from './components/Form/SecondStep';
import { wrapper } from './style.css';
import { useEffect } from 'react';
import { useFunnel } from '@/hooks';
import { useProfile } from '@/api/hooks';
import WriteTitle from './components/WriteTitle/WriteTitle';

export default function Write() {
  const [step, { prevStep, nextStep }] = useFunnel(['1', '2']);
  const { data: profile } = useProfile();
  const isLogin = Boolean(profile);
  if (!isLogin) {
    // window.history.back();
  }

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <div className={wrapper}>
      <WriteTitle prevStep={prevStep} />
      {step === '1' && <FirstStep nextStep={nextStep} />}
      {step === '2' && <SecondStep />}
    </div>
  );
}
