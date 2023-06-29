import { useSuspenseQuery } from '@suspensive/react-query';
import { boardKeys } from '@/api/board/queryKeys';
import { BoardDetail } from '@/api/board/types';
import { boardAPI } from '@/api/board/api';

const useBoardDetail = (boardId: string) =>
  useSuspenseQuery<BoardDetail>(boardKeys.detail(boardId), () => boardAPI.getBoardDetail(boardId));

export default useBoardDetail;
