'use client';

import { useRouter } from 'next/navigation';
import { Button, Typography, Dropdown, SvgIcon, Toast } from '@/components';
import { JoinModal, DeleteModal, CancelJoinModal, ParticipantsList } from '@/app/board/components';
import { useProfile } from '@/api/hooks';
import { useOverlay, useClipBoard } from '@/hooks';
import { BOARD_STATUS, TOAST_TEXT } from '@/app/board/constants';
import { BoardDetail } from '@/api/types';
import { wrapper, counterText, listBottomSpace, dropdown, dropdownMenu, buttonGroup } from './AsideSection.css';

interface Props {
  board: BoardDetail;
}

const AsideSection = ({ board }: Props) => {
  const router = useRouter();
  const { data: profile } = useProfile();
  const [openModal, closeModal] = useOverlay();
  const [openToast, closeToast] = useOverlay();
  const [, copyToClipBoard] = useClipBoard();

  const { boardId, chatLink, currentApply, maxApply, participants, status, minAge, maxAge, userAge } = board;
  const writer = participants.find(({ writer }) => writer);
  const isJoined = participants.find(({ userId }) => userId === profile?.userId);
  const isWriter = writer?.userId === profile?.userId;
  const isNotPossibleAge = Boolean(userAge && minAge && maxAge) && !(minAge <= userAge && userAge <= maxAge);

  const handleClickShareButton = () => {
    copyToClipBoard(window.location.href);
    openToast(<Toast type="success" message={TOAST_TEXT.COPY_BOARD_LINK} onClose={closeToast} />);
  };

  const handleClickJoinButton = () => {
    if (!profile) return router.push('/login');
    openModal(
      <JoinModal
        boardId={boardId}
        chatLink={chatLink}
        onClose={closeModal}
        onSuccessJoin={() => openToast(<Toast type="success" message={TOAST_TEXT.SUCCESS_JOIN} onClose={closeToast} />)}
        onFailureJoin={(errorMessage: string) =>
          openToast(<Toast type="warn" message={errorMessage} onClose={closeToast} />)
        }
      />,
    );
  };

  const handleClickDelete = () => {
    openModal(
      <DeleteModal
        boardId={boardId}
        onSuccessDelete={() => {
          openToast(<Toast type="success" message={TOAST_TEXT.SUCCESS_DELETE} onClose={closeToast} />);
          router.push('/');
        }}
        onFailureDelete={(errorMessage: string) =>
          openToast(<Toast type="warn" message={errorMessage} onClose={closeToast} />)
        }
        onClose={closeModal}
      />,
    );
  };

  const handleClickOpenChatButton = () => {
    window.open(chatLink, '_blank');
  };

  const handleClickCancelJoinButton = () => {
    openModal(
      <CancelJoinModal
        boardId={boardId}
        onSuccessCancel={() =>
          openToast(<Toast type="success" message={TOAST_TEXT.SUCCESS_CANCEL} onClose={closeToast} />)
        }
        onFailureCancel={(errorMessage: string) =>
          openToast(<Toast type="warn" message={errorMessage} onClose={closeToast} />)
        }
        onClose={closeModal}
      />,
    );
  };

  return (
    <aside className={wrapper}>
      <Dropdown className={dropdown}>
        <Dropdown.Toggle>
          <SvgIcon id="dot" width={36} height={36} />
        </Dropdown.Toggle>
        <Dropdown.Menu className={dropdownMenu} placement="bottomRight">
          <Dropdown.Item itemKey="share" onClick={handleClickShareButton}>
            <Typography variant="label2">공유하기</Typography>
          </Dropdown.Item>
          {isWriter && (
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
      <div className={buttonGroup}>
        {!isJoined && (
          <>
            <Button
              size="medium"
              disabled={status === BOARD_STATUS.DONE || isNotPossibleAge}
              onClick={handleClickJoinButton}
            >
              참여하기
            </Button>
            {isNotPossibleAge && (
              <Typography variant="label3" as="p" color="red500">
                나이 제한이 있는 먹팟이에요.
              </Typography>
            )}
          </>
        )}
        {isJoined && (
          <>
            <Button size="medium" onClick={handleClickOpenChatButton}>
              오픈 채팅방 바로가기
            </Button>
            <Button size="medium" color="text" onClick={handleClickCancelJoinButton}>
              참가 취소하기
            </Button>
          </>
        )}
      </div>
    </aside>
  );
};

export default AsideSection;
