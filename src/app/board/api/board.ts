import { request } from '@/utils/ky/request';
import { BoardDetail } from '@/app/board/types';

export const getBoardDetail = async (boardId: string) =>
  await request(`v1/boards/${boardId}`, {
    searchParams: {
      boardId,
    },
  }).json<BoardDetail>();
