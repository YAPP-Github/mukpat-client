'use client';

import { Button, Typography, Toast } from '@/components';
import { JoinModal, CancelJoinModal, ParticipantsList, DetailMenuButton } from '@/app/board/components';
import { useChangeBoardStatus, useProfile } from '@/api/hooks';
import { useBoardStates } from '@/app/board/hooks';
import { useOverlay, useLoginRedirect } from '@/hooks';
import { BOARD_STATUS, BoardDetail } from '@/api/types';
import { TOAST_TEXT } from '@/app/board/constants';
import { wrapper, listBottomSpace, buttonGroup } from './AsideSection.css';

interface Props {
  board: BoardDetail;
}

const AsideSection = ({ board }: Props) => {
  const { boardId, chatLink, isSample } = board;

  const { data: profile } = useProfile();
  const { redirectToLogin } = useLoginRedirect();
  const [openModal, closeModal] = useOverlay();
  const [openToast, closeToast] = useOverlay();
  const { isJoined, isJoinCancellable, isJoinable, isNotPossibleAge, isClosable, isAgainRecruitable } =
    useBoardStates(board);
  const { mutate: changeBoardStatus } = useChangeBoardStatus(boardId);

  const handleClickJoinButton = () => {
    if (!profile) return redirectToLogin();
    if (isSample) {
      return openToast(<Toast type="info" message={TOAST_TEXT.SAMPLE_BOARD} onClose={closeToast} />);
    }
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

  const handleClickCloseButton = () => {
    changeBoardStatus(BOARD_STATUS.DONE, {
      onSuccess: () => {
        openToast(<Toast type="success" message={TOAST_TEXT.SUCCESS_MAKE_DONE} onClose={closeToast} />);
      },
      onError: (err) => {
        openToast(<Toast type="warn" message={err.message} onClose={closeToast} />);
      },
    });
  };

  const handleClickReopenButton = () => {
    changeBoardStatus(BOARD_STATUS.IN_PROGRESS, {
      onSuccess: () => {
        openToast(<Toast type="success" message={TOAST_TEXT.SUCCESS_MAKE_INPROGRESS} onClose={closeToast} />);
      },
      onError: (err) => {
        openToast(<Toast type="warn" message={err.message} onClose={closeToast} />);
      },
    });
  };

  return (
    <aside className={wrapper}>
      <DetailMenuButton board={board} />
      <ParticipantsList className={listBottomSpace} board={board} />
      <div className={buttonGroup}>
        {!isJoined && (
          <>
            <Button size="medium" disabled={!isJoinable} onClick={handleClickJoinButton}>
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
            {isJoinCancellable && (
              <Button size="medium" color="text" onClick={handleClickCancelJoinButton}>
                참가 취소하기
              </Button>
            )}
            {isClosable && (
              <Button size="medium" color="text" onClick={handleClickCloseButton}>
                모집 마감하기
              </Button>
            )}
            {isAgainRecruitable && (
              <Button size="medium" color="text" onClick={handleClickReopenButton}>
                다시 모집하기
              </Button>
            )}
          </>
        )}
      </div>
    </aside>
  );
};

export default AsideSection;
