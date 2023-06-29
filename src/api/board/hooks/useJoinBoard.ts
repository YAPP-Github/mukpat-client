import { useMutation } from '@/api/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { boardKeys } from '@/api/board/queryKeys';
import { boardAPI } from '@/api/board/api';

const useJoinBoard = (boadId: number) => {
  const queryClient = useQueryClient();

  return useMutation(boardAPI.postBoardJoin, {
    onSuccess: () => {
      void queryClient.invalidateQueries(boardKeys.list());
      void queryClient.invalidateQueries(boardKeys.detail(boadId));
    },
  });
};

export default useJoinBoard;
