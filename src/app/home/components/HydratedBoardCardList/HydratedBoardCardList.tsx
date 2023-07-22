import { Hydrate, dehydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getQueryClients';
import { BoardCardList, BoardCardListLoading } from '@/app/home/components';
import { BOARDS_PER_PAGE } from '@/app/home/constants';
import { queryKeys, api } from '@/api';
import { Suspense } from '@suspensive/react';

const HydratedBoardCardList = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(queryKeys.board.list(), () =>
    api.board.getBoardList(undefined, BOARDS_PER_PAGE),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Suspense fallback={<BoardCardListLoading />}>
      <Hydrate state={dehydratedState}>
        <BoardCardList />
      </Hydrate>
    </Suspense>
  );
};

export default HydratedBoardCardList;
