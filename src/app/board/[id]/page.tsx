import { Header } from '@/components/server';
import { Content } from '@/components';
import { getBoardDetail } from '@/app/board/api';
import { BoardDetail } from '@/app/board/components';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getQueryClients';

// 나중에 추가 예정
// TODO
// [ ] queryKey 관리 방안 - https://github.com/lukemorales/query-key-factory
const BoardDetailPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const boardId = Number(id);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['boardDetail', boardId], () => getBoardDetail(boardId));
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Header />
      <Content>
        <Hydrate state={dehydratedState}>
          <BoardDetail />
        </Hydrate>
      </Content>
    </>
  );
};

export default BoardDetailPage;
