'use client';

import { useParams } from 'next/navigation';
import { useBoardDetail } from '@/api/hooks';
import { AsideSection, ContentSection } from '@/app/board/components';

import { wrapper } from './BoardDetail.css';

const BoardDetail = () => {
  const { id: boardId } = useParams();
  const { data: board } = useBoardDetail(boardId);

  return (
    <div className={wrapper}>
      <ContentSection board={board} />
      <AsideSection board={board} />
    </div>
  );
};

export default BoardDetail;
