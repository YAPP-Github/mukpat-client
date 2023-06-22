'use client';

import { useIntersectObserver } from '@/hooks';
import { useBoardListQuery } from '@/app/home/hooks';
import { BoardCard } from '@/app/home/components';
import { BOARDS_PER_PAGE } from '@/app/home/constants';

const BoardCardList = () => {
  const { data: boardList, getNextPage } = useBoardListQuery(BOARDS_PER_PAGE);

  const [ref] = useIntersectObserver<HTMLDivElement>({
    rootMargin: '100px',
    onIntersect: getNextPage,
  });

  return (
    <>
      {boardList.map((boardListItem) => (
        <BoardCard key={boardListItem.boardId} boardListItem={boardListItem} />
      ))}
      <div ref={ref}></div>
    </>
  );
};

export default BoardCardList;
