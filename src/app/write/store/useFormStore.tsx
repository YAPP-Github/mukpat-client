import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { StepOneData, StepTwoData } from '../types';

const stepVariant = {
  1: 'stepOne',
  2: 'stepTwo',
};

type setDataType = { step: 1; data: StepOneData } | { step: 2; data: StepTwoData };

interface formState {
  stepOne: StepOneData | null;
  stepTwo: StepTwoData | null;
  setData: ({ step, data }: setDataType) => void;
  reset: () => void;
}

const useFormStore = create<formState>()(
  devtools((set) => ({
    stepOne: null,
    stepTwo: null,
    setData: ({ step, data }) =>
      set((state) => ({
        ...state,
        [stepVariant[step]]: data,
      })),
    reset: () => set((state) => ({ ...state, stepOne: null, stepTwo: null })),
  })),
);

export default useFormStore;
