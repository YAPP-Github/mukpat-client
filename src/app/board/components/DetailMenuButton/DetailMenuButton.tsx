'use client';

import { useRouter } from 'next/navigation';
import { Dropdown, SvgIcon, Typography, Toast } from '@/components';
import { useProfile, useChangeBoardStatus } from '@/api/hooks';
import { useOverlay, useClipBoard, useIsMobile } from '@/hooks';
import { TOAST_TEXT } from '@/app/board/constants';
import { DeleteModal, CancelJoinModal } from '@/app/board/components';
import * as styles from './DetailMenuButton.css';
import { BOARD_STATUS, BoardDetail } from '@/api/types';

interface Props {
  board: BoardDetail;
}

const DetailMenuButton = ({ board }: Props) => {
  const { boardId, participants, status, currentApply, maxApply } = board;

  const router = useRouter();
  const { data: profile } = useProfile();
  const { mutate: changeBoardStatus } = useChangeBoardStatus(boardId);

  const [openModal, closeModal] = useOverlay();
  const [openToast, closeToast] = useOverlay();
  const [, copyToClipBoard] = useClipBoard();
  const isMobile = useIsMobile();

  const writer = participants.find(({ writer }) => writer);
  const isWriter = writer?.userId === profile?.userId;
  const isJoined = participants.find(({ userId }) => userId === profile?.userId);

  const handleClickShareButton = () => {
    copyToClipBoard(window.location.href);
    openToast(<Toast type="success" message={TOAST_TEXT.COPY_BOARD_LINK} onClose={closeToast} />);
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

  const handleClickEditBoard = () => {
    router.push(`/write/${boardId}`);
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

  const handleClickMakeDone = () => {
    changeBoardStatus(BOARD_STATUS.DONE, {
      onSuccess: () => {
        openToast(<Toast type="success" message={TOAST_TEXT.SUCCESS_MAKE_DONE} onClose={closeToast} />);
      },
      onError: (err) => {
        openToast(<Toast type="warn" message={err.message} onClose={closeToast} />);
      },
    });
  };

  const handleClickMakeInProgress = () => {
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
    <Dropdown className={styles.dropdown}>
      <Dropdown.Toggle>
        <SvgIcon id="dot" width={36} height={36} />
      </Dropdown.Toggle>
      <Dropdown.Menu className={styles.dropdownMenu} placement="bottomRight">
        <Dropdown.Item itemKey="share" onClick={handleClickShareButton}>
          <Typography variant="label2">공유하기</Typography>
        </Dropdown.Item>
        {isWriter && (
          <>
            <Dropdown.Item itemKey="change" onClick={handleClickEditBoard}>
              <Typography variant="label2">수정하기</Typography>
            </Dropdown.Item>
            <Dropdown.Item itemKey="delete" onClick={handleClickDelete}>
              <Typography variant="label2" color="red500">
                삭제하기
              </Typography>
            </Dropdown.Item>
            {status === '모집중' && (
              <Dropdown.Item itemKey="done" onClick={handleClickMakeDone}>
                <Typography variant="label2">모임 마감하기</Typography>
              </Dropdown.Item>
            )}
            {status !== '모집중' && currentApply < maxApply && (
              <Dropdown.Item itemKey="in_progress" onClick={handleClickMakeInProgress}>
                <Typography variant="label2">다시 모집하기</Typography>
              </Dropdown.Item>
            )}
          </>
        )}
        {isMobile && !isWriter && isJoined && (
          <Dropdown.Item itemKey="cancelJoin" onClick={handleClickCancelJoinButton}>
            <Typography variant="label2">참가 취소하기</Typography>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DetailMenuButton;
