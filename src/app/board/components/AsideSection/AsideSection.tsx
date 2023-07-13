'use client';

import { Button, Typography, Toast } from '@/components';
import { JoinModal, CancelJoinModal, ParticipantsList, DetailMenuButton } from '@/app/board/components';
import { useProfile } from '@/api/hooks';
import { useOverlay, useLoginRedirect } from '@/hooks';
import { BOARD_STATUS, TOAST_TEXT } from '@/app/board/constants';
import { BoardDetail } from '@/api/types';
import { wrapper, listBottomSpace, buttonGroup } from './AsideSection.css';

interface Props {
  board: BoardDetail;
}

const AsideSection = ({ board }: Props) => {
  const { data: profile } = useProfile();
  const { redirectToLogin } = useLoginRedirect();
  const [openModal, closeModal] = useOverlay();
  const [openToast, closeToast] = useOverlay();

  const { boardId, chatLink, participants, status, minAge, maxAge, userAge } = board;

  const isJoined = participants.find(({ userId }) => userId === profile?.userId);

  const isNotPossibleAge = Boolean(userAge && minAge && maxAge) && !(minAge <= userAge && userAge <= maxAge);

  const handleClickJoinButton = () => {
    if (!profile) return redirectToLogin();
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
      <DetailMenuButton />
      <ParticipantsList className={listBottomSpace} />
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
