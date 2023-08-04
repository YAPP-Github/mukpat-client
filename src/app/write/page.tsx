'use client';

import { useEffect } from 'react';
import { FirstStep, SecondStep, WriteTitle } from '@/app/write/components';
import { useFunnel, useLoginRedirect } from '@/hooks';
import { useProfile } from '@/api/hooks';
import useFormStore from '@/app/write/store/useFormStore';
import { useLeaveModal } from '@/app/write/hooks';
import { wrapper } from './style.css';

export default function Write() {
  const [step, { prevStep, nextStep }] = useFunnel(['1', '2']);
  const { reset, setData } = useFormStore();
  const { data: profile } = useProfile();

  const { redirectToLogin } = useLoginRedirect();

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);
    return () => {
      reset();
      window.removeEventListener('beforeunload', preventClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!profile) {
      redirectToLogin();
    }
  }, [redirectToLogin, profile]);

  useLeaveModal(true);

  return (
    <div className={wrapper}>
      <WriteTitle prevStep={prevStep} />
      {step === '1' && <FirstStep setData={setData} nextStep={nextStep} />}
      {step === '2' && <SecondStep boardId={0} reset={reset} />}
    </div>
  );
}
