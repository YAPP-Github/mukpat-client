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
import { formWrapper } from './Form.css';

type stepProps = {
  nextStep: () => void;
};

const FirstStep = ({ nextStep }: stepProps) => {
  const { stepOne, setData } = useFormStore();

  const method = useForm<StepOneSchema>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: stepOne || {},
  });

  const onSubmit = (data: StepOneData) => {
    const date = dayjs(data.meetingDate).format('YYYY-MM-DD');
    const time = dayjs(data.meetingTime).format('HH:mm');
    if (!data) {
      return;
    }
    data = {
      ...data,
      meetingDate: date,
      meetingTime: time,
    };
    console.log(data);
    setData({ step: 1, data });
    nextStep();
  };

  console.log(dayjs(method.getValues('meetingDate')).format('YYYY-MM-DD'));
  console.log(method.formState.errors);

  return (
    <>
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}>
          <div>
            <Typography variant="heading4" as="p">
              언제 만날까요?
            </Typography>
            <>
              <InputSection label="날짜" direction="row" required={true}>
                <InputDate control={method.control} name={'meetingDate'} />
              </InputSection>
              <InputSection label="시간" direction="row" required={true}>
                <InputDropdown
                  control={method.control}
                  name={'meetingTime'}
                  placeholder="오후 12:00"
                  selections={getTimeList()}
                ></InputDropdown>
              </InputSection>
            </>
          </div>
          <div>
            <Typography variant="heading4" as="p">
              몇 명 모을까요?
            </Typography>
            <>
              <InputSection label="인원" direction="row" required={true}>
                <Counter control={method.control} name={'maxApply'} />
              </InputSection>
              <InputSection label="" direction="row">
                <AgeModal control={method.control} />
              </InputSection>
            </>
          </div>
          <div>
            <Typography variant="heading4" as="p">
              어디서 만날까요?
            </Typography>
            <>
              <InputSection label="만날 위치" direction="row" required={true}>
                <Input
                  {...method.register('locationName')}
                  name={'locationName'}
                  showError={true}
                  type="search"
                  placeholder="위치 검색"
                ></Input>
              </InputSection>
              <InputSection label="상세 주소" direction="row">
                <Input
                  {...method.register('locationDetail', { required: false })}
                  name={'locationDetail'}
                  placeholder="ex) 1층 로비, 식당 입구"
                  maxLength={100}
                ></Input>
              </InputSection>
            </>
          </div>
          <Button size="xlarge" type="submit" disabled={!method.formState.isDirty}>
            다음
          </Button>
          {method.formState.isSubmitted && !method.formState.isValid && (
            <Typography color="red500" variant="label5" as="label">
              필수 항목을 입력하세요.
            </Typography>
          )}
        </form>
      </FormProvider>
    </>
  );
};

export default FirstStep;
