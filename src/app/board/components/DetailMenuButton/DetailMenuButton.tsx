'use client';

import { useRouter } from 'next/navigation';
import { Dropdown, SvgIcon, Typography, Toast, Media } from '@/components';
import { useBoardDetail } from '@/app/board/hooks';
import { useProfile } from '@/api/hooks';
import { useOverlay, useClipBoard } from '@/hooks';
import { TOAST_TEXT } from '@/app/board/constants';
import { DeleteModal, CancelJoinModal } from '@/app/board/components';
import * as styles from './DetailMenuButton.css';

const DetailMenuButton = () => {
  const router = useRouter();
  const { data: profile } = useProfile();
  const { boardId, participants } = useBoardDetail();

  const [openModal, closeModal] = useOverlay();
  const [openToast, closeToast] = useOverlay();
  const [, copyToClipBoard] = useClipBoard();

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
        <Media lessThan="m">
          {!isWriter && isJoined && (
            <Dropdown.Item itemKey="cancelJoin" onClick={handleClickCancelJoinButton}>
              <Typography variant="label2">참가 취소하기</Typography>
            </Dropdown.Item>
          )}
        </Media>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DetailMenuButton;