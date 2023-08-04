'use client';

import { SvgIcon, Typography } from '@/components';
import { useIntersectObserver } from '@/hooks';
import { useBoardListQuery } from '@/api/hooks';
import { BoardCard } from '@/app/home/components';
import { BOARDS_PER_PAGE } from '@/app/home/constants';
import { useRegionsFilterStore } from '@/store';
import { listGrid, noBoard } from './BoardCardList.css';

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

  return boardList.length > 0 ? (
    <ul className={listGrid}>
      {boardList.map((boardListItem) => (
        <BoardCard key={boardListItem.boardId} boardListItem={boardListItem} />
      ))}
      <div ref={ref}></div>
    </ul>
  ) : (
    <div className={noBoard}>
      <SvgIcon id="info" width={40} height={40} />
      <Typography variant="body2" as="p" color="hint">
        검색 결과가 없습니다.
      </Typography>
    </div>
  );
};

export default BoardCardList;
