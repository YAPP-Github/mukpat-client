import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { StepOneData, StepTwoData } from '../types';

const stepVariant = {
  1: 'stepOne',
  2: 'stepTwo',
};

type setDataType = { step: 1; data: StepOneData } | { step: 2; data: StepTwoData };
type initDataType = { stepOneData: StepOneData; stepTwoData: StepTwoData };

const INIT_STEPONE = {
  meetingDate: new Date(),
  timezone: '오후',
  meetingTime: '12:00',
  maxApply: 2,
  minAge: null,
  maxAge: null,
  locationName: '',
  x: 0,
  y: 0,
  region_1depth_name: '',
  region_2depth_name: '',
  locationDetail: null,
};

const INIT_STEPTWO = {
  title: '',
  content: '',
  chatLink: '',
};

interface FormState {
  stepOne: StepOneData;
  stepTwo: StepTwoData;
  initData: ({ stepOneData, stepTwoData }: initDataType) => void;
  setData: ({ step, data }: setDataType) => void;
  reset: () => void;
}

const useFormStore = create<FormState>()(
  devtools((set) => ({
    stepOne: INIT_STEPONE,
    stepTwo: INIT_STEPTWO,
    initData: ({ stepOneData, stepTwoData }) =>
      set({
        stepOne: stepOneData,
        stepTwo: stepTwoData,
      }),
    setData: ({ step, data }) =>
      set((state) => ({
        ...state,
        [stepVariant[step]]: data,
      })),
    reset: () => set((state) => ({ ...state, stepOne: INIT_STEPONE, stepTwo: INIT_STEPTWO })),
  })),
);

export default useFormStore;
