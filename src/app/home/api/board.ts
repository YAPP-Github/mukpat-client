import { request } from '@/utils/ky/request';
import { BoardListPagingData, BoardListResponse } from '@/app/home/types/board';

type GetBoardList = (requestlastId?: number, countPerScroll?: number) => Promise<BoardListPagingData>;

export const getBoardList: GetBoardList = async (requestlastId, countPerPage = 8) => {
  const { list, lastId } = await request('v1/boards', {
    searchParams: {
      countPerScroll: countPerPage,
      ...(requestlastId && { lastId: requestlastId }),
    },
  }).json<BoardListResponse>();

  return {
    data: list,
    lastId,
    isLastPage: list.length < countPerPage,
  };
};
