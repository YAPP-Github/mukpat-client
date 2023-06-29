'use client';

import { Button, Typography, Dropdown, SvgIcon } from '@/components';
import { JoinModal, ParticipantsList } from '@/app/board/components';
import { useOverlay, useProfile } from '@/hooks';
import { BOARD_STATUS } from '@/app/board/constants';
import { BoardDetail } from '@/app/board/types';
import { wrapper, counterText, listBottomSpace, dropdown, dropdownMenu } from './AsideSection.css';

// TODO
// [] 삭제, 수정, 공유 기능 구현
// [] 참가 중일때 버튼 표시 텍스트 바꾸기

interface Props {
  board: BoardDetail;
}

const AsideSection = ({ board }: Props) => {
  const { currentApply, maxApply, participants, status } = board;
  const { data: profile } = useProfile();

  const writer = participants.find(({ writer }) => writer);
  const isWriterProfile = writer?.userId === profile?.userId;

  const [openModal, closeModal] = useOverlay();

  const handleClickJoin = () => {
    openModal(<JoinModal onClose={closeModal} />);
  };

  return (
    <aside className={wrapper}>
      <Dropdown className={dropdown}>
        <Dropdown.Toggle>
          <SvgIcon id="dot" width={36} height={36} />
        </Dropdown.Toggle>
        <Dropdown.Menu className={dropdownMenu} placement="bottomRight">
          <Dropdown.Item itemKey="share">
            <Typography variant="label2">공유하기</Typography>
          </Dropdown.Item>
          {isWriterProfile && (
            <>
              <Dropdown.Item itemKey="change">
                <Typography variant="label2">수정하기</Typography>
              </Dropdown.Item>
              <Dropdown.Item itemKey="delete">
                <Typography variant="label2" color="red500">
                  삭제하기
                </Typography>
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
      <div className={counterText}>
        <Typography variant="label3" color="hint">
          참여중인 멤버
        </Typography>
        <Typography variant="label3" color="sub">
          {currentApply}/{maxApply}
        </Typography>
      </div>
      <ParticipantsList participants={participants} className={listBottomSpace} />
      <Button onClick={handleClickJoin} size="medium" disabled={status === BOARD_STATUS.DONE}>
        참여하기
      </Button>
    </aside>
  );
};

export default AsideSection;
