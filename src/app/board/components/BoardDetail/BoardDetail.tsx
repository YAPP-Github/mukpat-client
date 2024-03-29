'use client';

import { Media } from '@/components';
import { useBoardDetail } from '@/app/board/hooks';
import {
  AsideSection,
  ContentSection,
  BottomSection,
  DetailMenuButton,
  ParticipantsList,
  BoardDetailLoading,
} from '@/app/board/components';
import { wrapper } from './BoardDetail.css';

const BoardDetail = () => {
  const board = useBoardDetail();

  return (
    <Media breakpoint="m" fallback={<BoardDetailLoading />}>
      <Media.Less>
        <div className={wrapper}>
          <DetailMenuButton board={board} />
          <ContentSection board={board}>
            <ParticipantsList board={board} />
          </ContentSection>
          <BottomSection board={board} />
        </div>
      </Media.Less>
      <Media.Greater>
        <div className={wrapper}>
          <ContentSection board={board} />
          <AsideSection board={board} />
        </div>
      </Media.Greater>
    </Media>
  );
};

export default BoardDetail;
