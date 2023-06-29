import { useMutation } from '@/api/hooks';
import { useQueryClient } from '@tanstack/react-query';
import { boardKeys } from '@/api/board/queryKeys';
import { boardAPI } from '@/api/board/api';

/**
 * 먹팟 참여 신청을 하기 위한 Mutation
 * @param boadId - 참여할 먹팟 id
 */
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
