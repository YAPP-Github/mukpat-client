'use client';

import { Button, Typography, Dropdown, SvgIcon, Toast } from '@/components';
import { JoinModal, DeleteModal, ParticipantsList } from '@/app/board/components';
import { useProfile } from '@/api/hooks';
import { useOverlay } from '@/hooks';
import { BOARD_STATUS } from '@/app/board/constants';
import { BoardDetail } from '@/api/types';
import { wrapper, counterText, listBottomSpace, dropdown, dropdownMenu } from './AsideSection.css';
import { useClipBoard } from '@/hooks';

// TODO
// [] 삭제, 수정, 공유 기능 구현
// [] 참가 중일때 버튼 표시 텍스트 바꾸기

interface Props {
  board: BoardDetail;
}

const AsideSection = ({ board }: Props) => {
  const { boardId, chatLink, currentApply, maxApply, participants, status } = board;
  const { data: profile } = useProfile();

  const writer = participants.find(({ writer }) => writer);
  const isWriterProfile = writer?.userId === profile?.userId;

  const [openModal, closeModal] = useOverlay();
  const [openToast, closeToast] = useOverlay();

  const [, copy] = useClipBoard();

  const handleClickShare = () => {
    copy(window.location.href);
    openToast(<Toast type="success" message="먹팟 링크를 복사했어요!" onClose={closeToast} />);
  };

  const handleClickJoin = () => {
    openModal(
      <JoinModal
        boardId={boardId}
        chatLink={chatLink}
        onClose={closeModal}
        onSuccessJoin={() => openToast(<Toast type="success" message="참여 신청이 완료됐어요!" onClose={closeToast} />)}
        onFailureJoin={(errorMessage: string) =>
          openToast(<Toast type="warn" message={errorMessage} onClose={closeToast} />)
        }
      />,
    );
  };

  const handleClickDelete = () => {
    openModal(<DeleteModal onClose={closeModal} />);
  };

  return (
    <aside className={wrapper}>
      <Dropdown className={dropdown}>
        <Dropdown.Toggle>
          <SvgIcon id="dot" width={36} height={36} />
        </Dropdown.Toggle>
        <Dropdown.Menu className={dropdownMenu} placement="bottomRight">
          <Dropdown.Item itemKey="share" onClick={handleClickShare}>
            <Typography variant="label2">공유하기</Typography>
          </Dropdown.Item>
          {isWriterProfile && (
            <>
              <Dropdown.Item itemKey="change">
                <Typography variant="label2">수정하기</Typography>
              </Dropdown.Item>
              <Dropdown.Item itemKey="delete" onClick={handleClickDelete}>
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
