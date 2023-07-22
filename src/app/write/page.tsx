'use client';
import FirstStep from './components/Form/FirstStep';
import SecondStep from './components/Form/SecondStep';
import { wrapper } from './style.css';
import { useFunnel } from '@/hooks';
import { useProfile } from '@/api/hooks';
import WriteTitle from './components/WriteTitle/WriteTitle';
import useFormStore from './store/useFormStore';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Write() {
  const [step, { prevStep, nextStep }] = useFunnel(['1', '2']);
  const { reset, setData } = useFormStore();
  const { data } = useProfile();
  const router = useRouter();
  if (!data) {
    router.push('/login');
  }

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);
    return () => {
      window.removeEventListener('beforeunload', preventClose);
      reset();
    };
  }, []);

  return (
    <div className={wrapper}>
      <WriteTitle prevStep={prevStep} />
      {step === '1' && <FirstStep setData={setData} nextStep={nextStep} />}
      {step === '2' && <SecondStep reset={reset} />}
    </div>
  );
}
