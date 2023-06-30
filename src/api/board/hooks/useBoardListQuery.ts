import { useMemo, useCallback } from 'react';
import { useSuspenseInfiniteQuery } from '@suspensive/react-query';
import { BOARDS_PER_PAGE } from '@/app/home/constants';
import { BoardListPagingData } from '@/api/board/types';
import { boardKeys } from '@/api/board/queryKeys';
import { boardAPI } from '@/api/board/api';

/**
 * board list를 페이지당 boardsPerPage 개수만큼 가져옵니다.
 * @param boardsPerPage 페이지 당 한 번에 가져올 board 개수
 */
const useBoardListQuery = (boardsPerPage = BOARDS_PER_PAGE) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, ...rest } =
    useSuspenseInfiniteQuery<BoardListPagingData>(
      boardKeys.list(),
      ({ pageParam = undefined }) => boardAPI.getBoardList(pageParam, boardsPerPage),
      {
        getNextPageParam: (lastPage) => (lastPage.isLastPage ? undefined : lastPage.lastId),
      },
    );

  const boardList = useMemo(() => data.pages?.flatMap(({ data }) => data), [data]);

  const getNextPage = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    data: boardList,
    getNextPage,
    ...rest,
  };
};

export default useBoardListQuery;
