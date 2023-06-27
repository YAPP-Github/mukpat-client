import { request } from '@/utils/ky/request';
import { BoardDetailResponse } from '@/app/board/types';

export const getBoardDetail = async (boardId: number) =>
  await request(`v1/boards/${boardId}`, {
    searchParams: {
      boardId,
    },
  }).json<BoardDetailResponse>();
