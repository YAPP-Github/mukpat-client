'use client';

import { Button, InputDropdown, TextArea, Typography } from '@/components';
import { type CreationSchema, creationSchema } from '@/components/Input/schema';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import InputSection from '@/components/Input/InputSection';
import Counter from './components/Counter/Counter';
import InputDate from './components/InputDate';
import AgeModal from './components/AgeModal/AgeModal';
import getTimeList from './utils/getTimes';
import { formWrapper } from './style.css';

// name은 schema의 오브젝트 키
export default function Create() {
  const method = useForm<CreationSchema>({
    resolver: zodResolver(creationSchema),
  });

  const onSubmit = (data: CreationSchema) => {
    console.log('submitting');
    console.log(data);
  };

  return (
    <div
      style={{
        margin: '80px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '674px',
      }}
    >
      <FormProvider {...method}>
        <form className={formWrapper} onSubmit={method.handleSubmit(onSubmit)}>
          <Typography variant="heading4" as="p">
            언제 만날까요?
          </Typography>
          <>
            <InputSection label="날짜" direction="row">
              <InputDate control={method.control} name="date" />
            </InputSection>
            <InputSection label="시간" direction="row" required={true}>
              <InputDropdown
                control={method.control}
                name={'meetingTime'}
                placeholder="시간 선택"
                selections={getTimeList()}
              ></InputDropdown>
            </InputSection>
          </>
          <Typography variant="heading4" as="p">
            몇 명 모을까요?
          </Typography>
          <>
            <InputSection label="인원수" direction="row" required={true}>
              <Counter control={method.control} name={'person'} />
            </InputSection>
            <InputSection label="" direction="row">
              <AgeModal control={method.control} />
            </InputSection>
          </>
          <Typography variant="heading4" as="p">
            어디서 만날까요?
          </Typography>
          <>
            <InputSection label="만날 위치" direction="row" required={true}>
              <Input {...method.register('location')} name={'location'} placeholder="만날 위치 입력칸"></Input>
            </InputSection>
            <InputSection label="상세 주소" direction="row">
              <Input {...method.register('address')} name={'address'} placeholder="상세 주소 입력칸"></Input>
            </InputSection>
          </>
          <Typography variant="heading4" as="p">
            간단히 소개해주세요
          </Typography>
          <>
            <Input
              {...method.register('title')}
              name={'title'}
              placeholder="[필수] 제목을 입력해주세요"
              type="title"
            ></Input>
            <TextArea {...method.register('info')} name={'info'} type="textArea"></TextArea>
            <InputSection label="오픈 채팅방 링크" direction="row">
              <Input {...method.register('url')} name={'url'} placeholder="카카오톡 오픈 채팅방 링크"></Input>
              <div></div>
              <Typography variant="label3" color="grey500" as="p">
                베타서비스에서는 채팅 기능이 제공되지 않습니다. <br />
                효율적인 소통을 위해 오픈 채팅방을 만들어주세요.
              </Typography>
            </InputSection>
          </>
          <Button style={{ width: '100%' }} type="submit" disabled={!method.formState.isDirty}>
            제출하기
          </Button>
          {method.formState.isSubmitted && !method.formState.isValid && (
            <Typography color="red500" variant="label5" as="label">
              필수 항목을 입력하세요.
            </Typography>
          )}
        </form>
      </FormProvider>
    </div>
  );
}
