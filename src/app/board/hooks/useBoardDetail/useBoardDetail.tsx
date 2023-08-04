import { useParams, useSearchParams } from 'next/navigation';
import { useBoardDetail as useBoardDetailQuery } from '@/api/hooks';

const useBoardDetail = () => {
  const { id: boardId } = useParams();
  const searchParams = useSearchParams();

  const cityIdParam = searchParams.get('cityId');
  const provinceIdParam = searchParams.get('provinceId');

  const cityId = cityIdParam && !Number.isNaN(cityIdParam) ? Number(cityIdParam) : undefined;
  const provinceId = provinceIdParam && !Number.isNaN(provinceIdParam) ? Number(provinceIdParam) : undefined;

  const { data: board } = useBoardDetailQuery(Number(boardId), cityId, provinceId);

  return board;
};

export default useBoardDetail;
