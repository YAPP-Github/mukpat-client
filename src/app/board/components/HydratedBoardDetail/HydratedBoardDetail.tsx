import { dehydrate, Hydrate } from '@tanstack/react-query';
import { BoardDetail } from '@/app/board/components';
import getQueryClient from '@/utils/getQueryClients';
import { api, queryKeys } from '@/api';

const HydratedBoardDetail = async ({ boardId }: { boardId: number }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKeys.board.detail(boardId), () => api.board.getBoardDetail(boardId));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <BoardDetail />
    </Hydrate>
  );
};

export default HydratedBoardDetail;
