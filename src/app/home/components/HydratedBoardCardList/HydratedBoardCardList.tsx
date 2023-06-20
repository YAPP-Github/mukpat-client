import { Hydrate, dehydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getQueryClients';
import { getBoardList } from '@/app/home/api';
import { BoardCardList } from '@/app/home/components';

const HydratedBoardCardList = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(['boardList'], () => getBoardList(undefined, 4));
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <BoardCardList />
    </Hydrate>
  );
};

export default HydratedBoardCardList;
