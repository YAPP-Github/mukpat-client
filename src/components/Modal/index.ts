'use client';

import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

const ModalRoot = Object.assign(Modal, {
  Content: ModalContent,
  Footer: ModalFooter,
  Header: ModalHeader,
});

export default ModalRoot;
export { Modal, ModalContent, ModalFooter, ModalHeader };
