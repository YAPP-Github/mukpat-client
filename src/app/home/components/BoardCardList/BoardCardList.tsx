'use client';

import { useIntersectObserver } from '@/hooks';
import { useBoardListQuery } from '@/app/home/hooks';
import { BoardCard } from '@/app/home/components';
import { BOARDS_PER_PAGE } from '@/app/home/constants';
import { listGrid } from './BoardCardList.css';

const BoardCardList = () => {
  const { data: boardList, getNextPage } = useBoardListQuery(BOARDS_PER_PAGE);

  const [ref] = useIntersectObserver<HTMLDivElement>({
    rootMargin: '100px',
    onIntersect: getNextPage,
  });

  return (
    <>
      <ul className={listGrid}>
        {boardList.map((boardListItem) => (
          <BoardCard key={boardListItem.boardId} boardListItem={boardListItem} />
        ))}
      </ul>
      <div ref={ref}></div>
    </>
  );
};

export default BoardCardList;
