'use client';

import { Modal, ModalContent, ModalFooter, ModalHeader, IconButton, Typography, Button } from '@/components';
import { BulletTitle } from '@/app/board/components';
import { modalContent } from './JoinInfoModal.css';

interface Props {
  onClose: () => void;
}

const JoinInfoModal = ({ onClose }: Props) => {
  return (
    <Modal onClose={onClose} size="large">
      <ModalHeader title="참여 신청 안내" type="infoWithClose" style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton iconType="close" active={false} onClick={onClose} />
      </ModalHeader>
      <ModalContent size="large" className={modalContent}>
        <div>
          <BulletTitle style={{ marginBottom: '8px' }}>카카오톡 오픈 채팅방에 입장해 주세요.</BulletTitle>
          <Typography variant="body3" color="secondary">
            베타서비스에서는 채팅 기능이 제공되지 않아요.
            <br /> 효율적인 소통을 위해 오픈 채팅방에 입장해 주세요.
          </Typography>
        </div>
        <div>
          <BulletTitle style={{ marginBottom: '8px' }}>모임 에티켓을 지켜주세요.</BulletTitle>
          <Typography variant="body3" color="secondary">
            꼭 참여할 수 있는 모임에만 신청해 주세요.
            <br />
            모임 참여가 어려운 경우 반드시 멤버분들에게
            <br />
            해당 사실을 알린 후 모임 신청을 취소해 주세요.
          </Typography>
        </div>
        <div></div>
      </ModalContent>
      <ModalFooter type="single">
        <Button color="primary" onClick={onClose}>
          참여하기
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default JoinInfoModal;
