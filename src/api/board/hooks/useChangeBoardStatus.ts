import { useQueryClient } from '@tanstack/react-query';
import { useMutation } from '@/hooks';
import { boardKeys } from '@/api/board/queryKeys';
import { boardAPI } from '@/api/board/api';
import { BoardStatus } from '@/api/board/types';

const useChangeBoardStatus = (boardId: number) => {
  const queryClient = useQueryClient();
  return useMutation((status: BoardStatus) => boardAPI.patchBoardStatus(boardId, status), {
    onSuccess: () => {
      void queryClient.invalidateQueries(boardKeys.detail(boardId));
      void queryClient.invalidateQueries(boardKeys.list());
    },
  });
};

export default useChangeBoardStatus;
