import { useMutation } from '@/api/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { boardKeys } from '@/api/board/queryKeys';
import { boardAPI } from '@/api/board/api';

/**
 * 먹팟 삭제 mutation
 * @param boardId - 삭제할 먹팟 id
 */
const useDeleteBoard = (boardId: number) => {
  const queryClient = useQueryClient();

  return useMutation(boardAPI.deleteBoard, {
    onSuccess: () => {
      void queryClient.invalidateQueries(boardKeys.list());
      void queryClient.invalidateQueries(boardKeys.detail(boardId));
    },
  });
};

export default useDeleteBoard;
