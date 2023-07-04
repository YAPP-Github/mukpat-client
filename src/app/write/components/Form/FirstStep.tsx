'use client';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input, InputDropdown, InputSection, Typography } from '@/components';
import { InputDate, Counter, AgeModal, MapModal } from '@/app/write/components';
import { zodResolver } from '@hookform/resolvers/zod';
import getTimeList from '@/app/write/components/InputDate/getTimes';
import useFormStore from '@/app/write/store/useFormStore';
import { stepOneSchema, StepOneSchema } from '@/app/write/lib/schema';
import { StepOneData } from '@/app/write/types';
import { formWrapper, sectionGap, inputGap, submitButton } from './Form.css';
import { useMediaQuery } from '@/hooks';

type stepProps = {
  nextStep: () => void;
};

const FirstStep = ({ nextStep }: stepProps) => {
  const { stepOne, setData } = useFormStore();
  const [isMobile, setMobile] = useState<boolean>(false);
  const mobile = useMediaQuery({ bp: 'm' });

  const method = useForm<StepOneSchema>({
    mode: 'onSubmit',
    resolver: zodResolver(stepOneSchema),
    defaultValues: stepOne || {},
  });

  useEffect(() => {
    setMobile(mobile);
  }, [mobile]);

  const onSubmit = useCallback(
    (data: StepOneData) => {
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
    },
    [setData, nextStep],
  );

  return (
    <>
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}>
          <div className={sectionGap}>
            <Typography variant={isMobile ? 'title3' : 'heading4'} as="p">
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
            <Typography variant={isMobile ? 'title3' : 'heading4'} as="p">
              몇 명 모을까요?
            </Typography>
            <div className={inputGap}>
              {isMobile ? (
                <>
                  <InputSection label="인원" direction="row" required={true}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <AgeModal control={method.control} />
                      <Counter control={method.control} name={'maxApply'} />
                    </div>
                  </InputSection>
                </>
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
            <Typography variant={isMobile ? 'title3' : 'heading4'} as="p">
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
          <Button className={submitButton} type="submit" disabled={!method.formState.isDirty}>
            다음
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default FirstStep;
