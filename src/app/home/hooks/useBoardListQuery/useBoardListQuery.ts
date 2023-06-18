import { HTTPError } from 'ky';
import { useCallback, useMemo } from 'react';
import { useSuspenseInfiniteQuery } from '@suspensive/react-query';
import { getBoardList } from '@/app/home/api';
import { BoardListPagingData } from '@/app/home/types';

/**
 * @param countPerPage 페이지 당 한 번에 가져올 board 개수
 */
export const useBoardListQuery = (countPerPage = 8) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, ...rest } = useSuspenseInfiniteQuery<
    BoardListPagingData,
    HTTPError,
    BoardListPagingData
  >(['boardList'], ({ pageParam = undefined }) => getBoardList(pageParam, countPerPage), {
    getNextPageParam: (lastPage) => (lastPage.isLastPage ? undefined : lastPage.lastId),
  });

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
