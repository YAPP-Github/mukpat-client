import { Modal, Typography, Button } from '@/components';
import { DELETE_MODAL_TEXT, TOAST_TEXT } from '@/app/board/constants';
import { instructionText, buttonGroup } from './DeleteModal.css';
import { useDeleteBoard } from '@/api/board/hooks';

interface Props {
  /** 삭제할 먹팟 boardId */
  boardId: number;

  /** 참가 신청 취소 성공 시 실행할 콜백 함수 */
  onSuccessDelete?: () => void;

  /** 참가 신청 취소 실패 시 실행할 콜백 함수 */
  onFailureDelete?: (errorMessage: string) => void;

  /** 모달 닫기 버튼 클릭 시 실행할 콜백 함수 */
  onClose: () => void;
}

const DeleteModal = ({ boardId, onSuccessDelete, onFailureDelete, onClose }: Props) => {
  const { mutate: deleteBoard } = useDeleteBoard(boardId);

  const handleClickDeleteButton = () => {
    deleteBoard(boardId, {
      onSuccess: () => {
        onSuccessDelete?.();
      },
      onError: (err) => {
        onFailureDelete?.(err?.message || TOAST_TEXT.FAILURE_DELETE);
      },
      onSettled: () => {
        onClose();
      },
    });
  };

  return (
    <Modal onClose={onClose}>
      <Modal.Header title={DELETE_MODAL_TEXT.TITLE} type="info" />
      <Modal.Content size="small">
        <Typography variant="body3" color="secondary" className={instructionText}>
          {DELETE_MODAL_TEXT.INSTRUCTION}
        </Typography>
      </Modal.Content>
      <Modal.Footer type="horizontal" className={buttonGroup}>
        <Button color="sub" size="medium" onClick={onClose}>
          {DELETE_MODAL_TEXT.CANCEL}
        </Button>
        <Button color="secondary" size="medium" onClick={handleClickDeleteButton}>
          {DELETE_MODAL_TEXT.DELETE}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
