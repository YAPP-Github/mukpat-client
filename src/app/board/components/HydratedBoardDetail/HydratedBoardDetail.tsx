import { dehydrate, Hydrate } from '@tanstack/react-query';
import { BoardDetail } from '@/app/board/components';
import getQueryClient from '@/utils/getQueryClients';
import { queries } from '@/queries';

const HydratedBoardDetail = async ({ boardId }: { boardId: string }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queries.board.detail(boardId));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <BoardDetail />
    </Hydrate>
  );
};

export default HydratedBoardDetail;
