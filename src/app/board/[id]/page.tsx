import { notFound } from 'next/navigation';
import { Header } from '@/components/server';
import { Suspense } from '@suspensive/react';
import { Content, HydratedBoardDetail, BoardDetailLoading } from '@/app/board/components';

interface Props {
  params: {
    id: string;
  };
  searchParams: {
    cityId?: string;
    provinceId?: string;
  };
}

const BoardDetailPage = ({
  params: { id },
  searchParams: { cityId: cityIdParam, provinceId: provinceIdParam },
}: Props) => {
  const boardId = Number(id);
  const cityId = cityIdParam && !Number.isNaN(cityIdParam) ? Number(cityIdParam) : undefined;
  const provinceId = provinceIdParam && !Number.isNaN(provinceIdParam) ? Number(provinceIdParam) : undefined;
  if (Number.isNaN(boardId)) notFound();

  return (
    <>
      <Header />
      <Content verticalCenter={false}>
        <Suspense fallback={<BoardDetailLoading />}>
          <HydratedBoardDetail boardId={boardId} cityId={cityId} provinceId={provinceId} />
        </Suspense>
      </Content>
    </>
  );
};

export default BoardDetailPage;
