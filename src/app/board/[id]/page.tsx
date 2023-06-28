import { Content } from '@/components';
import { Header } from '@/components/server';
import { HydratedBoardDetail } from '@/app/board/components';

const BoardDetailPage = async ({
  params: { id: boardId },
}: {
  params: {
    id: string;
  };
}) => {
  return (
    <>
      <Header />
      <Content>
        <HydratedBoardDetail boardId={boardId} />
      </Content>
    </>
  );
};

export default BoardDetailPage;
