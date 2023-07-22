import { Hydrate, dehydrate } from '@tanstack/react-query';
import BoardForm from '../Form/BoardForm';
import getQueryClient from '@/utils/getQueryClients';
import { queryKeys } from '@/api';
import { writeAPI } from '@/api/write';

const HydratedBoardDetail = async ({ boardId }: { boardId: number }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKeys.write.board(boardId), () => writeAPI.getBoardDetail(boardId));
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <BoardForm />
    </Hydrate>
  );
};

export default HydratedBoardDetail;
