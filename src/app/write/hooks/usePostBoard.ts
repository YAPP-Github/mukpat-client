import { useState, useCallback } from 'react';
import { request } from '@/utils/ky/request';
import { BoardData } from '../types';
import dayjs from 'dayjs';

const usePostBoard = (onSuccess: (response: any) => void) => {
  const [error, setError] = useState<Error | null>(null);

  const handlePostBoard = useCallback(
    async (data: BoardData) => {
      try {
        if (data.meetingDate == 'Invalid Date') {
          data.meetingDate = dayjs().format('YYYY-MM-DD');
        }
        const response = await request.post('v1/boards', {
          json: { ...data },
        });
        onSuccess(response);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('알 수 없는 에러입니다.'));
      }
    },
    [onSuccess],
  );

  return {
    error,
    handlePostBoard,
  };
};

export default usePostBoard;
