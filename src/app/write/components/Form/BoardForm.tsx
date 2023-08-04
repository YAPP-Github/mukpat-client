'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useFunnel } from '@/hooks';
import { useProfile } from '@/api/hooks';
import { FirstStep, SecondStep, WriteTitle } from '@/app/write/components';
import { useSetFormData, useLeaveModal } from '@/app/write/hooks';
import { wrapper } from '../../style.css';
import useFormStore from '@/app/write/store/useFormStore';

export default function BoardForm() {
  const { data } = useProfile();
  const router = useRouter();

  const { id: boardId } = useParams() as { id: string };
  useSetFormData(boardId);
  const { reset, setData } = useFormStore();
  const [step, { prevStep, nextStep }] = useFunnel(['1', '2']);
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
  }, []);

  if (!data) {
    router.push('/login');
  }
  useLeaveModal(true);

  return (
    <div className={wrapper}>
      <WriteTitle prevStep={prevStep} />
      {step === '1' && <FirstStep setData={setData} nextStep={nextStep} />}
      {step === '2' && <SecondStep boardId={Number(boardId)} reset={reset} isPatch />}
    </div>
  );
}
