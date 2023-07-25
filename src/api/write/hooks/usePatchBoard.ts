import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@/hooks';
import { boardKeys } from '@/api/board';
import { writeAPI } from '@/api/write/api';

const usePatchBoard = (boardId: number) => {
  const queryClient = useQueryClient();

  return useMutation(writeAPI.patchBoard, {
    onSuccess: () => {
      void queryClient.invalidateQueries(boardKeys.detail(boardId));
    },
  });
};

export default usePatchBoard;
