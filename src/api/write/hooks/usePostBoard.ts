import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@/hooks';
import { boardKeys } from '@/api/board';
import { writeAPI } from '@/api/write/api';
import { ParsedData, PostResponse } from '@/app/write/types';
import { HTTPError } from 'ky';

const usePostBoard = () => {
  const queryClient = useQueryClient();

  return useMutation<PostResponse, HTTPError, ParsedData, unknown>(writeAPI.postBoard, {
    onSuccess: () => {
      void queryClient.invalidateQueries(boardKeys.list());
    },
  });
};

export default usePostBoard;
