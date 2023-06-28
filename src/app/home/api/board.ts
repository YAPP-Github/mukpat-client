import { request } from '@/utils/ky/request';
import { BoardListPagingData, BoardListResponse } from '@/app/home/types/board';
import { BOARDS_PER_PAGE } from '@/app/home/constants';

type GetBoardList = (requestlastId?: number, boardsPerPage?: number) => Promise<BoardListPagingData>;

export const getBoardList: GetBoardList = async (requestlastId, boardsPerPage = BOARDS_PER_PAGE) => {
  const { list, lastId } = await request('v1/boards', {
    searchParams: {
      countPerScroll: boardsPerPage,
      ...(requestlastId && { lastId: requestlastId }),
    },
  }).json<BoardListResponse>();

  return {
    data: list,
    lastId,
    isLastPage: list.length < boardsPerPage,
  };
};
