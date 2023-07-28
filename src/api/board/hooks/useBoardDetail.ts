import { useSuspenseQuery } from '@suspensive/react-query';
import { boardKeys } from '@/api/board/queryKeys';
import { BoardDetail } from '@/api/types';
import { boardAPI } from '@/api/board/api';

const useBoardDetail = (boardId: number, cityId?: number, provinceId?: number) =>
  useSuspenseQuery<BoardDetail>(boardKeys.detail(boardId, cityId, provinceId), () =>
    boardAPI.getBoardDetail(boardId, cityId, provinceId),
  );

export default useBoardDetail;
