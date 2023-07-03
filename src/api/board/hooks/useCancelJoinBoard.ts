import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@/hooks';
import { boardKeys } from '@/api/board/queryKeys';
import { boardAPI } from '@/api/board/api';

const useCancelJoinBoard = (boardId: number) => {
  const queryClient = useQueryClient();
  return useMutation(boardAPI.deleteBoardJoin, {
    onSuccess: () => {
      void queryClient.invalidateQueries(boardKeys.detail(boardId));
      void queryClient.invalidateQueries(boardKeys.list());
    },
  });
};

export default useCancelJoinBoard;
