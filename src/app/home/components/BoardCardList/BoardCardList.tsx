'use client';

import { useIntersectObserver } from '@/hooks';
import { useBoardListQuery } from '@/app/home/hooks';
import { BoardCard } from '@/app/home/components';
import { listGrid } from './BoardCardList.css';

const BoardCardList = () => {
  const { data: boardList, getNextPage } = useBoardListQuery(4);

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
