import { Modal, ModalContent, ModalFooter, ModalHeader, Typography, Button } from '@/components';
import { DELETE_MODAL_TEXT } from '@/app/board/constants';
import { instructionText, buttonGroup } from './DeleteModal.css';

interface Props {
  onClose: () => void;
}

const DeleteModal = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose}>
      <ModalHeader title={DELETE_MODAL_TEXT.TITLE} type="info" />
      <ModalContent size="small">
        <Typography variant="body3" color="secondary" className={instructionText}>
          {DELETE_MODAL_TEXT.INSTRUCTION}
        </Typography>
      </ModalContent>
      <ModalFooter type="horizontal" className={buttonGroup}>
        <Button color="enabled" size="medium" onClick={onClose}>
          {DELETE_MODAL_TEXT.CANCEL}
        </Button>
        <Button color="secondary" size="medium" onClick={onClose}>
          {DELETE_MODAL_TEXT.DELETE}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
