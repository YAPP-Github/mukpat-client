import { Button, Typography, Modal } from '@/components';
import { useCancelJoinBoard } from '@/api/hooks';
import { CANCEL_JOIN_MODAL_TEXT, TOAST_TEXT } from '@/app/board/constants';
import { instructionText, buttonGroup } from './CancelJoinModal.css';

interface Props {
  /** 참가 신청 취소할 먹팟 boardId */
  boardId: number;

  /** 참가 신청 취소 성공 시 실행할 콜백 함수 */
  onSuccessCancel?: () => void;

  /** 참가 신청 취소 실패 시 실행할 콜백 함수 */
  onFailureCancel?: (errorMessage: string) => void;

  /** 모달 닫기 버튼 클릭 시 실행할 콜백 함수 */
  onClose: () => void;
}

const CancelJoinModal = ({ boardId, onSuccessCancel, onFailureCancel, onClose }: Props) => {
  const { mutate: cancelJoinBoard } = useCancelJoinBoard(boardId);

  const handleClickCancelButton = () => {
    cancelJoinBoard(boardId, {
      onSuccess: () => {
        onSuccessCancel?.();
      },
      onError: (err) => {
        onFailureCancel?.(err?.message || TOAST_TEXT.FAILURE_CANCEL);
      },
      onSettled: () => {
        onClose();
      },
    });
  };

  return (
    <Modal onClose={onClose}>
      <Modal.Header type="info" title={CANCEL_JOIN_MODAL_TEXT.TITLE} />
      <Modal.Content size="small">
        <Typography variant="body3" color="secondary" className={instructionText}>
          {CANCEL_JOIN_MODAL_TEXT.INSTRUCTION}
        </Typography>
      </Modal.Content>
      <Modal.Footer type="horizontal" className={buttonGroup}>
        <Button color="sub" size="medium" onClick={onClose}>
          {CANCEL_JOIN_MODAL_TEXT.NOT_CANCEL}
        </Button>
        <Button color="secondary" size="medium" onClick={handleClickCancelButton}>
          {CANCEL_JOIN_MODAL_TEXT.CANCEL}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelJoinModal;
