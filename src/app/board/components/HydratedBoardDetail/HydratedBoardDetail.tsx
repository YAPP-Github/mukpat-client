import { dehydrate, Hydrate } from '@tanstack/react-query';
import { BoardDetail } from '@/app/board/components';
import getQueryClient from '@/utils/getQueryClients';
import { api, queryKeys } from '@/api';

interface Props {
  boardId: number;
  cityId?: number;
  provinceId?: number;
}

const HydratedBoardDetail = async ({ boardId, cityId, provinceId }: Props) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKeys.board.detail(boardId, cityId, provinceId), () =>
    api.board.getBoardDetail(boardId, cityId, provinceId),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <BoardDetail />
    </Hydrate>
  );
};

export default HydratedBoardDetail;
