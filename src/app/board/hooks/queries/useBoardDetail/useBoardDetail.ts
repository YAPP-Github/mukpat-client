import { useSuspenseQuery } from '@suspensive/react-query';
import { getBoardDetail } from '@/app/board/api';

export const useBoardDetail = (boardId: number) =>
  useSuspenseQuery(['boardDetail', boardId], () => getBoardDetail(boardId));
