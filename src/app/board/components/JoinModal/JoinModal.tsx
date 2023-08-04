'use client';

import { useJoinBoard } from '@/api/hooks';
import { Modal, IconButton, Button } from '@/components';
import { JoinForm } from '@/app/board/components';
import { useCheckboxGroupState } from '@/app/board/hooks';
import { JOIN_MODAL_TEXT, TOAST_TEXT } from '@/app/board/constants';
import { modalHeader, modalContent } from './JoinModal.css';

const { BUTTON } = JOIN_MODAL_TEXT;

interface Props {
  /** 먹팟 게시물 boardId */
  boardId: number;

  /** 먹팟 오픈채팅방 링크 */
  chatLink: string;

  /** 참가 성공 시 호출되는 함수 */
  onSuccessJoin?: () => void;

  /** 참가 실패 시 호출되는 함수 */
  onFailureJoin?: (errorMessage: string) => void;

  /** 모달을 닫을때 호출되는 함수 */
  onClose: () => void;
}

const JoinModal = ({ boardId, chatLink, onSuccessJoin, onFailureJoin, onClose }: Props) => {
  const [checkBoxGroupState, validateUnchecked, toggleChecked] = useCheckboxGroupState(2);

  const { mutate: joinBoard } = useJoinBoard(boardId);

  const handleClickJoinButton = () => {
    if (!validateUnchecked()) return;

    joinBoard(boardId, {
      onSuccess: () => {
        onSuccessJoin?.();
      },
      onError: (err) => {
        onFailureJoin?.(err?.message || TOAST_TEXT.FAILURE_JOIN);
      },
      onSettled: () => {
        onClose();
      },
    });
  };

  return (
    <Modal onClose={onClose} size="large">
      <Modal.Header title="참여 신청 안내" type="infoWithClose" className={modalHeader}>
        <IconButton iconType="close" active={false} hover onClick={onClose} />
      </Modal.Header>
      <Modal.Content size="large" className={modalContent}>
        <JoinForm chatLink={chatLink} checkBoxGroupState={checkBoxGroupState} toggleChecked={toggleChecked} />
      </Modal.Content>
      <Modal.Footer type="single">
        <Button
          color="primary"
          onClick={handleClickJoinButton}
          disabled={checkBoxGroupState.some((state) => !state.checked)}
        >
          {BUTTON.JOIN}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default JoinModal;
