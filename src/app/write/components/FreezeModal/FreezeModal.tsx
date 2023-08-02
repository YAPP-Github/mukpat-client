import { Button, Modal, Typography } from '@/components';

interface Props {
  onClose: () => void;
  onClick?: () => void;
  content?: string;
  footer?: string | string[];
}

const FreezeModal = ({
  content = '페이지를 나가면 작성 중인 먹팟이 삭제돼요.',
  footer = ['나가기', '계속 작성하기'],
  onClose,
  onClick,
}: Props) => {
  return (
    <Modal onClose={onClose} size="small">
      <Modal.Header type="info" title="안내" />
      <Modal.Content size="small">
        <Typography style={{ whiteSpace: 'pre-line' }} variant="body3" color="secondary">
          {content}
        </Typography>
      </Modal.Content>
      <Modal.Footer type="horizontal">
        <Button onClick={onClick} color="text" size="micro">
          {footer[0]}
        </Button>
        <Button onClick={onClose} color="primary" size="micro">
          {footer[1]}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FreezeModal;
