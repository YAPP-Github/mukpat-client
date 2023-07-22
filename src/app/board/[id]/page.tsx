import { notFound } from 'next/navigation';
import { Header } from '@/components/server';
import { Suspense } from '@suspensive/react';
import { Content, BoardDetail, BoardDetailLoading } from '@/app/board/components';

const BoardDetailPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const boardId = Number(id);
  if (Number.isNaN(boardId)) notFound();

  return (
    <>
      <Header />
      <Content verticalCenter={false}>
        <Suspense fallback={<BoardDetailLoading />}>
          <BoardDetail />
        </Suspense>
      </Content>
    </>
  );
};

export default BoardDetailPage;
