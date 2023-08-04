'use client';

import { useOverlay, useLoginRedirect } from '@/hooks';
import { useProfile } from '@/api/hooks';
import { BoardDetail } from '@/api/types';
import { BottomButton, Toast } from '@/components';
import { JoinBottomSheet } from '@/app/board/components';
import { TOAST_TEXT } from '@/app/board/constants';
import { useBoardStates } from '@/app/board/hooks';

interface Props {
  board: BoardDetail;
}

const BottomSection = ({ board }: Props) => {
  const { data: profile } = useProfile();
  const { boardId, chatLink, isSample } = board;
  const { isJoined, isNotPossibleAge, isJoinable } = useBoardStates(board);
  const [openBottomSheet, closeBottomSheet] = useOverlay();
  const [openToast, closeToast] = useOverlay();
  const { redirectToLogin } = useLoginRedirect();

  const handleClickJoinButton = () => {
    if (!profile) return redirectToLogin();
    if (isSample) {
      return openToast(<Toast type="info" message={TOAST_TEXT.SAMPLE_BOARD} onClose={closeToast} />);
    }
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
          disabled={!isJoinable}
        >
          참여하기
        </BottomButton>
      )}
    </>
  );
};

export default BottomSection;
