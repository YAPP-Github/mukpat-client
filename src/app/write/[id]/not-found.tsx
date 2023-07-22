'use client';

import { useEffect, useCallback } from 'react';
import { useOverlay } from '@/hooks';
import { Button, Modal, Typography } from '@/components';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  const [openModal, closeModal] = useOverlay();

  const handleCloseModal = useCallback(() => {
    closeModal();
    router.push('/');
  }, [closeModal, router]);

  useEffect(() => {
    openModal(
      <Modal onClose={handleCloseModal}>
        <Modal.Header type="info" title="안내" />
        <Modal.Content size="small">
          <Typography variant="body3">삭제된 게시글입니다.</Typography>
        </Modal.Content>
        <Modal.Footer type="single">
          <Button color="primary" size="medium" onClick={handleCloseModal}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>,
    );
  }, [openModal, handleCloseModal]);

  return <></>;
};

export default NotFound;
