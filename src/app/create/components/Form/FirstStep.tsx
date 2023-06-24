'use client';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '../../store/useFormStore';
import { stepOneSchema, StepOneSchema } from '../../lib/schema';
import { StepOneData } from '../../types';
import { Button, Input, InputDropdown, InputSection, Typography } from '@/components';
import InputDate from '../../components/InputDate';
import getTimeList from '../../utils/getTimes';
import Counter from '../Counter/Counter';

const FirstStep = () => {
  const { stepOne, setData } = useFormStore();
  const router = useRouter();

  const method = useForm<StepOneSchema>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: stepOne || {},
  });

  const onSubmit = (data: StepOneData) => {
    console.log(data);
    setData({ step: 1, data });
    router.push('/create/step2');
  };

  return (
    <>
      <FormProvider {...method}>
        <form style={{ display: 'grid', gridAutoFlow: 'row', gap: '56px' }} onSubmit={method.handleSubmit(onSubmit)}>
          <div>
            <Typography variant="heading4" as="p">
              언제 만날까요?
            </Typography>
            <div style={{ display: 'grid', marginTop: '20px', gap: '1rem' }}>
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
          <div>
            <Typography variant="heading4" as="p">
              몇 명 모을까요?
            </Typography>
            <div style={{ display: 'grid', marginTop: '20px', gap: '1rem' }}>
              <InputSection label="인원" direction="row" required={true}>
                <Counter control={method.control} name={'maxApply'} />
              </InputSection>
            </div>
          </div>
          <div>
            <Typography variant="heading4" as="p">
              어디서 만날까요?
            </Typography>
            <div style={{ display: 'grid', marginTop: '20px', gap: '1rem' }}>
              <InputSection label="만날 위치" direction="row" required={true}>
                <Input
                  onSubmit={() => {
                    console.log('submit');
                  }}
                  {...method.register('locationName')}
                  name={'location'}
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
            </div>
          </div>
        </form>
      </FormProvider>
      <Button type="submit" disabled={!method.formState.isDirty}>
        다음
      </Button>
    </>
  );
};

export default FirstStep;
