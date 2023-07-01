'use client';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '@/app/write/store/useFormStore';
import { boardSchema, BoardSchema } from '@/app/write/lib/schema';
import { BoardData } from '@/app/write/types';
import { Button, Input, InputSection, TextArea, Typography } from '@/components';
import usePostBoard from '@/app/write/hooks/usePostBoard';
import { formWrapper, inputGap } from './Form.css';

const SecondStep = () => {
  const { stepOne, reset } = useFormStore();
  const router = useRouter();
  const { error, handlePostBoard } = usePostBoard(() => {
    console.log(error);
  });

  const method = useForm<BoardSchema>({
    resolver: zodResolver(boardSchema),
    defaultValues: { ...stepOne },
  });

  const onSubmit = (data: BoardData) => {
    if (!data) {
      return;
    }
    console.log(data);
    handlePostBoard(data);
    reset();
    router.push('/');
  };

  return (
    <>
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}>
          <div className={inputGap}>
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
          <Button size="xLarge" type="submit" disabled={!method.formState.isDirty}>
            먹팟 만들기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SecondStep;
