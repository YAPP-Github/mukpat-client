'use client';
import FirstStep from './components/Form/FirstStep';
import SecondStep from './components/Form/SecondStep';
import useFunnel from '@/hooks/useFunnel/useFunnel';
import { Typography } from '@/components';

export default function StepOnePage() {
  const [step, { nextStep }] = useFunnel(['1', '2']);

  return (
    <div
      style={{
        width: '674px',
        margin: '7.25rem auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '2.25rem',
      }}
    >
      <Typography variant="heading1" as="p" color="primary500">
        우리 회사 먹팟 만들기
      </Typography>
      {step === '1' && <FirstStep nextStep={nextStep} />}
      {step === '2' && <SecondStep />}
    </div>
  );
}
