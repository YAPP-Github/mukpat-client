import { useState, useCallback } from 'react';
import { request } from '@/utils/ky/request';
import { FormData } from '../types';

const usePostBoard = (onSuccess: () => void) => {
  const [error, setError] = useState<Error | null>(null);

  const handlePostBoard = useCallback(
    async (data: FormData) => {
      const {
        meetingDate,
        meetingTime,
        maxApply,
        minAge,
        maxAge,
        locationName,
        x,
        y,
        locationDetail,
        title,
        content,
        chatLink,
      } = data;
      try {
        await request.post('v1/users/savePost', {
          json: {
            meetingDate,
            meetingTime,
            maxApply,
            minAge,
            maxAge,
            locationName,
            x,
            y,
            locationDetail,
            title,
            content,
            chatLink,
          },
        });
        onSuccess();
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
