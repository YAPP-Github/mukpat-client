import { Content } from '@/components';
import { Header } from '@/components/server';
import { Suspense } from '@suspensive/react';
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
      <Content verticalCenter={false} style={{ paddingTop: '116px' }}>
        <Suspense>
          <HydratedBoardDetail boardId={boardId} />
        </Suspense>
      </Content>
    </>
  );
};

export default BoardDetailPage;
