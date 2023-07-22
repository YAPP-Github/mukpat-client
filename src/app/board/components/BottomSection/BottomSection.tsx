'use client';

import { useOverlay, useLoginRedirect } from '@/hooks';
import { useProfile } from '@/api/hooks';
import { BottomButton, Toast } from '@/components';
import { JoinBottomSheet } from '@/app/board/components';
import { BOARD_STATUS, TOAST_TEXT } from '@/app/board/constants';
import { useBoardDetail } from '@/app/board/hooks';

const BottomSection = () => {
  const { data: profile } = useProfile();
  const { boardId, chatLink, participants, userAge, minAge, maxAge, status } = useBoardDetail();
  const [openBottomSheet, closeBottomSheet] = useOverlay();
  const [openToast, closeToast] = useOverlay();
  const { redirectToLogin } = useLoginRedirect();

  const isJoined = participants.find(({ userId }) => userId === profile?.userId);

  const isNotPossibleAge = Boolean(userAge && minAge && maxAge) && !(minAge <= userAge && userAge <= maxAge);

  const handleClickJoinButton = () => {
    if (!profile) return redirectToLogin();
    openBottomSheet(
      <JoinBottomSheet
        boardId={boardId}
        chatLink={chatLink}
        onClose={closeBottomSheet}
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

  return (
    <>
      {isJoined ? (
        <BottomButton onClick={handleClickOpenChatButton}>오픈 채팅방 바로가기</BottomButton>
      ) : (
        <BottomButton
          onClick={handleClickJoinButton}
          errorMsg={isNotPossibleAge ? '나이 제한이 있는 먹팟이에요.' : undefined}
          disabled={status === BOARD_STATUS.DONE || isNotPossibleAge}
        >
          참여하기
        </BottomButton>
      )}
    </>
  );
};

export default BottomSection;
