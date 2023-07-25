import { Button, Modal } from '@/components';
import { useOverlay } from '@/hooks';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface ModalProps {
  onClose: () => void;
}

const PreventModal = ({ onClose }: ModalProps) => {
  const [, closeModal] = useOverlay();
  const router = useRouter();

  const handleClickOut = useCallback(() => {
    router.back();
  }, [router]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <Modal onClose={closeModal} size="small">
      <Modal.Header type="info" title="안내" />
      <Modal.Content size="small">페이지를 나가면 작성 중인 먹팟이 삭제돼요. </Modal.Content>
      <Modal.Footer type="horizontal">
        <Button onClick={handleClickOut} color="text" size="micro">
          나가기
        </Button>
        <Button onClick={handleClose} color="primary" size="micro">
          계속 작성하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PreventModal;
