'use client';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import useFormStore from '../store/useFormStore';
import { stepTwoSchema, StepTwoSchema } from '../lib/schema';
import { StepTwoData } from '../types';
import { Button, Input, InputSection, TextArea, Typography } from '@/components';

export default function StepOnePage() {
  const { stepTwo, setData } = useFormStore();
  const router = useRouter();

  const method = useForm<StepTwoSchema>({
    mode: 'onTouched',
    resolver: zodResolver(stepTwoSchema),
    defaultValues: stepTwo || {},
  });

  const onSubmit = (data: StepTwoData) => {
    console.log(data);
    setData({ step: 2, data });
    router.push('/create/step2');
  };

  return (
    <>
      <main>
        <Typography variant="heading1" as="h1">
          우리회사 먹팟 만들기 2
        </Typography>
        <FormProvider {...method}>
          <form style={{ display: 'grid', gridAutoFlow: 'row', gap: '56px' }} onSubmit={method.handleSubmit(onSubmit)}>
            <div>
              <Input {...method.register('title')} name={'title'} placeholder="[필수] 제목을 입력해주세요."></Input>
              <TextArea {...method.register('content')} name="content" maxLength={2000} type="textArea"></TextArea>
            </div>
            <InputSection required={true} aria-required={'true'} label="오픈 채팅방 링크" direction="row">
              <Input {...method.register('chatLink')} name={'chatLink'} placeholder="카카오톡 오픈채팅방 링크"></Input>
            </InputSection>
          </form>
        </FormProvider>
        <Button type="submit">먹팟 만들기</Button>
      </main>
    </>
  );
}
