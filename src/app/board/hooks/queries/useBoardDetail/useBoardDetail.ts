import { HTTPError } from 'ky';
import { useSuspenseQuery } from '@suspensive/react-query';

import { queries } from '@/queries';
import { BoardDetailResponse } from '@/app/board/types';

export const useBoardDetail = (boardId: string) =>
  useSuspenseQuery<BoardDetailResponse, HTTPError, BoardDetailResponse>(queries.board.detail(boardId));
