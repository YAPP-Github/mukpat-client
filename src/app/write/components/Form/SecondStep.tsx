'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useFormStore from '@/app/write/store/useFormStore';
import { boardSchema, BoardSchema } from '@/app/write/lib/schema';
import { ParsedData } from '@/app/write/types';
import { Button, Input, InputSection, TextArea, Typography } from '@/components';
import { formWrapper, inputGap } from './Form.css';
import parseData from './util/parseData';

const SecondStep = () => {
  const { stepOne, stepTwo, reset } = useFormStore();

  const method = useForm<BoardSchema>({
    resolver: zodResolver(boardSchema),
    defaultValues: { ...stepOne, ...stepTwo },
  });

  const onSubmit = (data: ParsedData) => {
    if (!data) {
      return;
    }
    parseData(data);
    reset();
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
            <Input
              {...method.register('chatLink')}
              name={'chatLink'}
              maxLength={300}
              placeholder="카카오톡 오픈채팅방 링크"
            ></Input>
            <div></div>
            <Typography variant="body3" as="p" color="secondary">
              베타서비스에서는 채팅 기능이 제공되지 않습니다. <br /> 효율적인 소통을 위해 오픈 채팅방을 만들어주세요.
            </Typography>
          </InputSection>
          <Button style={{ width: '100%' }} type="submit" disabled={!method.formState.isDirty}>
            먹팟 만들기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SecondStep;
