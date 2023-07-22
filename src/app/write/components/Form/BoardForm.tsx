'use client';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { wrapper } from '../../style.css';
import { useFunnel } from '@/hooks';
import { useProfile } from '@/api/hooks';
import { useParams, useRouter } from 'next/navigation';
import WriteTitle from '../WriteTitle/WriteTitle';
import useSetFormData from '../../hooks/useSetFormData';
import useFormStore from '../../store/useFormStore';
import { useEffect } from 'react';

export default function BoardForm() {
  const { data } = useProfile();
  const router = useRouter();
  if (!data) {
    router.push('/login');
  }
  const { id: boardId } = useParams();
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
      window.removeEventListener('beforeunload', preventClose);
      reset();
    };
  }, []);

  return (
    <div className={wrapper}>
      <WriteTitle prevStep={prevStep} />
      {step === '1' && <FirstStep setData={setData} nextStep={nextStep} />}
      {step === '2' && <SecondStep boardId={Number(boardId)} reset={reset} />}
    </div>
  );
}
