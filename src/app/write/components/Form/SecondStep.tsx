'use client';

import { FormProvider, SubmitHandler } from 'react-hook-form';
import { BoardData, PostResponse } from '@/app/write/types';
import { Button, Input, InputSection, TextArea, Toast, Typography } from '@/components';
import { formWrapper, inputGap } from './Form.css';
import parseData from './util/parseData';
import useWriteBoard from '@/api/write/hooks/usePostBoard';
import { useRouter } from 'next/navigation';
import { useWriteForm } from '@/app/write/hooks/useWriteForm';
import { useOverlay } from '@/hooks';
import { writeAPI } from '@/api/write';

type StepProps = {
  reset: () => void;
  boardId?: number;
  isPatch?: boolean;
};

const SecondStep = ({ reset, boardId, isPatch = false }: StepProps) => {
  const { mutate: board } = useWriteBoard();
  const { stepTwoMethod } = useWriteForm();
  const [openToast, closeToast] = useOverlay();
  const router = useRouter();

  const onSubmit: SubmitHandler<BoardData> = async (data: BoardData) => {
    if (!data) {
      return;
    }
    if (!isPatch) {
      board(
        { ...parseData(data) },
        {
          onSuccess: (response: PostResponse) => {
            openToast(<Toast type="success" message="먹팟 생성이 완료되었어요!" onClose={closeToast} />);
            router.push(`/board/${response.boardId}`);
            reset();
          },
          onError: (error) => {
            openToast(<Toast type="warn" message={error.message} onClose={closeToast} />);
            if (error.response.status === 403) {
              router.push('/login');
            }
          },
        },
      );
    }
    if (isPatch && boardId) {
      writeAPI.patchBoard(boardId, { ...parseData(data) }).then(() => {
        openToast(<Toast type="success" message="먹팟 수정이 완료되었어요!" onClose={closeToast} />);
        router.push(`/board/${boardId}`);
        reset();
      });
    }
  };

  return (
    <>
      <FormProvider {...stepTwoMethod}>
        <form className={formWrapper} onSubmit={stepTwoMethod.handleSubmit(onSubmit)}>
          <div className={inputGap}>
            <Input
              {...stepTwoMethod.register('title')}
              name={'title'}
              placeholder="[필수] 제목을 입력해주세요."
            ></Input>
            <TextArea {...stepTwoMethod.register('content')} name="content" maxLength={2000} type="textArea"></TextArea>
          </div>
          <InputSection required={true} aria-required={'true'} label="오픈 채팅방 링크" direction="row">
            <Input
              {...stepTwoMethod.register('chatLink')}
              name={'chatLink'}
              maxLength={300}
              placeholder="카카오톡 오픈채팅방 링크"
            ></Input>
            <div></div>
            <Typography variant="body3" as="p" color="secondary">
              베타서비스에서는 채팅 기능이 제공되지 않습니다. <br /> 효율적인 소통을 위해 오픈 채팅방을 만들어주세요.
            </Typography>
          </InputSection>
          <Button style={{ width: '100%' }} type="submit">
            먹팟 만들기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SecondStep;
