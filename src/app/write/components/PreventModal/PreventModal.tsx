import { Button, Modal } from '@/components';

interface Props {
  onClose: () => void;
  onClick: () => void;
}

const PreventModal = ({ onClose, onClick }: Props) => {
  return (
    <Modal onClose={onClose} size="small">
      <Modal.Header type="info" title="안내" />
      <Modal.Content size="small">페이지를 나가면 작성 중인 먹팟이 삭제돼요. </Modal.Content>
      <Modal.Footer type="horizontal">
        <Button onClick={onClick} color="text" size="micro">
          나가기
        </Button>
        <Button onClick={onClose} color="primary" size="micro">
          계속 작성하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreventModal;
