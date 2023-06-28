import { createQueryKeys } from '@lukemorales/query-key-factory';
import { getBoardDetail } from '@/app/board/api';

export const board = createQueryKeys('board', {
  list: null,
  detail: (boardId: string) => ({
    queryKey: [boardId],
    queryFn: () => getBoardDetail(boardId),
  }),
});
