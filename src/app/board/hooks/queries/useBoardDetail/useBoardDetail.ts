import { useSuspenseQuery } from '@suspensive/react-query';

import { queries } from '@/queries';
import { BoardDetail } from '@/app/board/types';

export const useBoardDetail = (boardId: string) => useSuspenseQuery<BoardDetail>(queries.board.detail(boardId));
