import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useOverlay } from '@/hooks';
import useFormStore from '@/app/write/store/useFormStore';
import { FreezeModal } from '@/app/write/components';

function assertString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error(`Expected string, got ${typeof value}`);
  }
}

const useFunnel = (
  steps: Array<string>,
): [
  string,
  {
    prevStep: () => void;
    nextStep: () => void;
  },
] => {
  assertString(steps[0]);
  const [step, setStep] = useState<string>(steps[0]);
  const [openModal, closeModal] = useOverlay();
  const { reset } = useFormStore();
  const router = useRouter();

  const showModal = () => {
    openModal(
      <FreezeModal
        onClick={() => {
          closeModal();
          reset();
          router.back();
        }}
        onClose={closeModal}
      />,
    );
  };

  const prevStep = () => {
    const currentStepIndex = steps.indexOf(step);
    if (currentStepIndex === 0) {
      showModal();
      return;
    }
    const newStep = steps[currentStepIndex - 1];
    assertString(newStep);
    setStep(newStep);
  };

  const nextStep = () => {
    const currentStepIndex = steps.indexOf(step);
    if (currentStepIndex === steps.length - 1) {
      return;
    }
    const newStep = steps[currentStepIndex + 1];
    assertString(newStep);
    setStep(newStep);
  };

  return [
    step,
    {
      prevStep,
      nextStep,
    },
  ];
};

export default useFunnel;
