'use client';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '../../store/useFormStore';
import { stepTwoSchema, StepTwoSchema } from '../../lib/schema';
import { StepTwoData } from '../../types';
import { Button, Input, InputSection, TextArea, Typography } from '@/components';
import usePostBoard from '../../hooks/usePostBoard';
import { formWrapper, inputDivider } from './Form.css';

const SecondStep = () => {
  const { stepTwo, setData } = useFormStore();
  const router = useRouter();
  const { error } = usePostBoard(() => {
    console.log(error);
  });

  const method = useForm<StepTwoSchema>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: stepTwo || {},
  });

  const onSubmit = (data: StepTwoData) => {
    if (!data) {
      return;
    }
    console.log(data);
    // handlePostBoard(data);
    setData({ step: 2, data });
    router.push('/');
  };

  return (
    <>
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}>
          <div className={inputDivider}>
            <Input {...method.register('title')} name={'title'} placeholder="[필수] 제목을 입력해주세요."></Input>
            <TextArea {...method.register('content')} name="content" maxLength={2000} type="textArea"></TextArea>
          </div>
          <InputSection required={true} aria-required={'true'} label="오픈 채팅방 링크" direction="row">
            <Input {...method.register('chatLink')} name={'chatLink'} placeholder="카카오톡 오픈채팅방 링크"></Input>
            <div></div>
            <Typography variant="body3" as="p" color="secondary">
              베타서비스에서는 채팅 기능이 제공되지 않습니다. <br /> 효율적인 소통을 위해 오픈 채팅방을 만들어주세요.
            </Typography>
          </InputSection>
          <Button size="xlarge" type="submit" disabled={!method.formState.isDirty}>
            먹팟 만들기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SecondStep;
