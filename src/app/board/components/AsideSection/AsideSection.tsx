'use client';

import { Button } from '@/components';
import { JoinInfoModal } from '@/app/board/components';
import { useOverlay } from '@/hooks';

const AsideSection = () => {
  const [openModal, closeModal] = useOverlay();

  const handleClickJoin = () => {
    openModal(<JoinInfoModal onClose={closeModal} />);
  };

  return (
    <div>
      AsideSection
      <Button onClick={handleClickJoin}>참여하기</Button>
    </div>
  );
};

export default AsideSection;
