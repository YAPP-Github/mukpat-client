'use client';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input, InputSection, Typography } from '@/components';
import { InputDate, Counter, AgeModal, MapModal } from '@/app/write/components';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '@/app/write/store/useFormStore';
import { stepOneSchema, StepOneSchema } from '@/app/write/lib/schema';
import { StepOneData } from '@/app/write/types';
import { formWrapper, sectionGap, inputGap, submitButton, flexBetween } from './Form.css';
import { useIsMobile } from '@/hooks';
import TimeDropDown from '../TimeDropDown/TimeDropDown';
import AgeBottomSheet from '../AgeModal/AgeBottomSheet';

type stepProps = {
  nextStep: () => void;
};

const FirstStep = ({ nextStep }: stepProps) => {
  const { stepOne, setData } = useFormStore();
  const mobile = useIsMobile();
  const method = useForm<StepOneSchema>({
    resolver: zodResolver(stepOneSchema),
    mode: 'onChange',
    defaultValues: stepOne || {},
  });
  console.log(method.formState.errors);

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
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}>
          <div className={sectionGap}>
            <Typography variant={mobile ? 'title3' : 'heading4'} as="p">
              언제 만날까요?
            </Typography>
            <div className={inputGap}>
              <InputSection label="날짜" direction="row" required={true}>
                <InputDate control={method.control} name={'meetingDate'} />
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
                    <AgeBottomSheet control={method.control}></AgeBottomSheet>
                    <Counter control={method.control} name={'maxApply'} />
                  </div>
                </InputSection>
              ) : (
                <>
                  <InputSection label="인원" direction="row" required={true}>
                    <Counter control={method.control} name={'maxApply'} />
                  </InputSection>
                  <InputSection label="" direction="row">
                    <AgeModal control={method.control} />
                  </InputSection>
                </>
              )}
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
                  {...method.register('locationDetail', { required: false })}
                  name={'locationDetail'}
                  placeholder="ex) 1층 로비, 식당 입구"
                  maxLength={100}
                ></Input>
              </InputSection>
            </div>
          </div>
          <Button size="paddingMedium" className={submitButton} type="submit" disabled={!method.formState.isDirty}>
            다음
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default FirstStep;
