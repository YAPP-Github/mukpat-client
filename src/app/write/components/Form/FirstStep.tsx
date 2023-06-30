'use client';
import dayjs from 'dayjs';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '../../store/useFormStore';
import { stepOneSchema, StepOneSchema } from '../../lib/schema';
import { StepOneData } from '../../types';
import { Button, Input, InputDropdown, InputSection, Typography } from '@/components';
import { InputDate, Counter, AgeModal } from '@/app/write/components';
import getTimeList from '../InputDate/getTimes';
import { formWrapper, sectionGap, inputGap } from './Form.css';
import MapModal from '../MapModal/MapModal';
import { useCallback } from 'react';

type stepProps = {
  nextStep: () => void;
};

const FirstStep = ({ nextStep }: stepProps) => {
  const { stepOne, setData } = useFormStore();

  const method = useForm<StepOneSchema>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: stepOne || {},
  });

  const onSubmit = useCallback((data: StepOneData) => {
    if (!data) {
      return;
    }
    const date = dayjs(data.meetingDate).format('YYYY-MM-DD');
    const time = data.meetingTime.substr(-5);
    data = {
      ...data,
      meetingDate: date,
      meetingTime: time,
    };
    setData({ step: 1, data });
    nextStep();
  }, []);

  return (
    <>
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}>
          <div className={sectionGap}>
            <Typography variant="heading4" as="p">
              언제 만날까요?
            </Typography>
            <div className={inputGap}>
              <InputSection label="날짜" direction="row" required={true}>
                <InputDate control={method.control} name={'meetingDate'} />
              </InputSection>
              <InputSection label="시간" direction="row" required={true}>
                <InputDropdown
                  control={method.control}
                  name={'meetingTime'}
                  placeholder="시간 선택"
                  selections={getTimeList()}
                ></InputDropdown>
              </InputSection>
            </div>
          </div>
          <div className={sectionGap}>
            <Typography variant="heading4" as="p">
              몇 명 모을까요?
            </Typography>
            <div className={inputGap}>
              <InputSection label="인원" direction="row" required={true}>
                <Counter control={method.control} name={'maxApply'} />
              </InputSection>
              <InputSection label="" direction="row">
                <AgeModal control={method.control} />
              </InputSection>
            </div>
          </div>
          <div className={sectionGap}>
            <Typography variant="heading4" as="p">
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
          <Button size="xLarge" type="submit" disabled={!method.formState.isDirty}>
            다음
          </Button>
        </form>
        {method.formState.isSubmitted && !method.formState.isValid && (
          <Typography color="red500" variant="label5" as="label">
            필수 항목을 입력하세요.
          </Typography>
        )}
      </FormProvider>
    </>
  );
};

export default FirstStep;
