import { useSuspenseQuery } from '@suspensive/react-query';
import { boardKeys } from '@/api/board/queryKeys';
import { BoardDetail } from '@/api/types';
import { boardAPI } from '@/api/board/api';

const useBoardDetail = (boardId: number) =>
  useSuspenseQuery<BoardDetail>(boardKeys.detail(boardId), () => boardAPI.getBoardDetail(boardId));

export default useBoardDetail;
