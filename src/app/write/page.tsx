'use client';
import FirstStep from './components/Form/FirstStep';
import SecondStep from './components/Form/SecondStep';
import { wrapper } from './style.css';
import { useFunnel, useOverlay } from '@/hooks';
import { useProfile } from '@/api/hooks';
import WriteTitle from './components/WriteTitle/WriteTitle';
import useFormStore from './store/useFormStore';
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PreventModal from '@/app/write/components/PreventModal/PreventModal';
import useRouteChangeEvents from '@/app/write/hooks/useRouteChangeEvents';

const useLeaveConfirmation = (shouldPreventRouteChange: boolean) => {
  const [openModal, closeModal] = useOverlay();
  console.log('useLeaveConfirmation');
  // const router = useRouter();
  const onBeforeRouteChange = useCallback(() => {
    console.log('onBeforeRouteChange');
    if (shouldPreventRouteChange) {
      openModal(<PreventModal onClose={closeModal} onClick={() => allowRouteChange} />);
      return false;
    }
    return true;
  }, [shouldPreventRouteChange]);

  const { allowRouteChange } = useRouteChangeEvents({ onBeforeRouteChange });
};

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
      reset();
      window.removeEventListener('beforeunload', preventClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLeaveConfirmation(true);

  return (
    <div className={wrapper}>
      <WriteTitle prevStep={prevStep} />
      {step === '1' && <FirstStep setData={setData} nextStep={nextStep} />}
      {step === '2' && <SecondStep boardId={0} reset={reset} />}
    </div>
  );
}
