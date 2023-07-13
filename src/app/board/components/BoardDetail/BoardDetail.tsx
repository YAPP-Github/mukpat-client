'use client';

import { Media } from '@/components';
import { useBoardDetail } from '@/app/board/hooks';
import {
  AsideSection,
  ContentSection,
  BottomSection,
  DetailMenuButton,
  ParticipantsList,
} from '@/app/board/components';
import { wrapper } from './BoardDetail.css';

const BoardDetail = () => {
  const board = useBoardDetail();

  return (
    <div className={wrapper}>
      <Media lessThan="m">
        <DetailMenuButton />
      </Media>
      <ContentSection board={board}>
        <Media lessThan="m">
          <ParticipantsList />
        </Media>
      </ContentSection>
      <Media greaterThan="m">
        <AsideSection board={board} />
      </Media>
      <BottomSection />
    </div>
  );
};

export default BoardDetail;
