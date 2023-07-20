'use client';

import { useIntersectObserver } from '@/hooks';
import { useBoardListQuery } from '@/api/hooks';
import { BoardCard } from '@/app/home/components';
import { BOARDS_PER_PAGE } from '@/app/home/constants';
import { useRegionsFilterStore } from '@/app/home/store';

const BoardCardList = () => {
  const { cityId, provinceId } = useRegionsFilterStore((state) => ({
    cityId: state.cityId,
    provinceId: state.provinceId,
  }));

  const { data: boardList, getNextPage } = useBoardListQuery(BOARDS_PER_PAGE, cityId, provinceId);

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
