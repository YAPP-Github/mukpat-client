'use client';
import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { type Size, modalWrapper, backgroundWrapper } from './Modal.css';
import { useClickOutside } from '@/hooks';

type ModalProps = {
  size?: Size;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal = ({ size, onClose, className, children, ...rest }: ModalProps) => {
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      onClose();
    },
  });

  return (
    <>
      <div className={cx(backgroundWrapper)} data-testid="outside"></div>
      <div className={cx(modalWrapper({ size }), className)} ref={ref} {...rest}>
        {children}
      </div>
    </>
  );
};

export default Modal;
