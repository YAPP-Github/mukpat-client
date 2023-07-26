'use client';

import { useCallback } from 'react';
import { FormProvider } from 'react-hook-form';
import { Button, Input, InputSection, Typography } from '@/components';
import { InputDate, Counter, AgeModal, AgeBottomSheet, MapModal, TimeDropDown } from '@/app/write/components';
import { StepOneData } from '@/app/write/types';
import { useWriteForm } from '@/app/write/hooks/useWriteForm';
import { formWrapper, sectionGap, inputGap, submitButton, flexBetween, ageError } from './Form.css';
import { useIsMobile } from '@/hooks';

type stepProps = {
  nextStep: () => void;
  setData: ({ step, data }: { step: 1; data: StepOneData }) => void;
};

const FirstStep = ({ nextStep, setData }: stepProps) => {
  const { stepOneMethod } = useWriteForm();
  const mobile = useIsMobile();
  const onSubmit = useCallback(
    (data: StepOneData) => {
      if (!data) {
        return;
      }
      setData({ step: 1, data });
      nextStep();
    },
    [setData, nextStep],
  );

  return (
    <>
      <FormProvider {...stepOneMethod}>
        <form className={formWrapper} onSubmit={stepOneMethod.handleSubmit(onSubmit)}>
          <div className={sectionGap}>
            <Typography variant={mobile ? 'title3' : 'heading4'} as="p">
              언제 만날까요?
            </Typography>
            <div className={inputGap}>
              <InputSection label="날짜" direction="row" required={true}>
                <InputDate control={stepOneMethod.control} name={'meetingDate'} />
              </InputSection>
              <TimeDropDown />
            </div>
          </div>
          <div className={sectionGap}>
            <Typography variant={mobile ? 'title3' : 'heading4'} as="p">
              몇 명 모을까요?
            </Typography>
            <div className={inputGap}>
              {mobile ? (
                <InputSection label="인원" direction="row" required={true}>
                  <div className={flexBetween}>
                    <AgeBottomSheet control={stepOneMethod.control}></AgeBottomSheet>
                    <Counter control={stepOneMethod.control} name={'maxApply'} />
                  </div>
                </InputSection>
              ) : (
                <>
                  <InputSection label="인원" direction="row" required={true}>
                    <Counter control={stepOneMethod.control} name={'maxApply'} />
                  </InputSection>
                  <InputSection label="" direction="row">
                    <AgeModal control={stepOneMethod.control} />
                  </InputSection>
                </>
              )}
              <Typography className={ageError} color="red500" variant="label5" as="p">
                {stepOneMethod.formState.errors['maxAge']?.message}
              </Typography>
            </div>
          </div>
          <div className={sectionGap}>
            <Typography variant={mobile ? 'title3' : 'heading4'} as="p">
              어디서 만날까요?
            </Typography>
            <div className={inputGap}>
              <InputSection label="만날 위치" direction="row" required={true}>
                <MapModal />
              </InputSection>
              <InputSection label="상세 주소" direction="row">
                <Input
                  {...stepOneMethod.register('locationDetail', { required: false })}
                  name={'locationDetail'}
                  placeholder="ex) 1층 로비, 식당 입구"
                  maxLength={30}
                ></Input>
              </InputSection>
            </div>
          </div>
          <Button size="paddingMedium" className={submitButton} type="submit">
            다음
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default FirstStep;
