import { useParams } from 'next/navigation';
import { useBoardDetail as useBoardDetailQuery } from '@/api/hooks';

const useBoardDetail = () => {
  const { id: boardId } = useParams();
  const { data: board } = useBoardDetailQuery(Number(boardId));

  return board;
};

export default useBoardDetail;
