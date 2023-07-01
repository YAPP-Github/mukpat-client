'use client';
import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { type Size, modalWrapper, backgroundWrapper } from './Modal.css';
import { useClickOutside } from '@/hooks';

type ModalProps = {
  size?: Size;
  overflow?: boolean;
  onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal = ({ size, onClose, overflow, className, children, ...rest }: ModalProps) => {
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      onClose();
    },
  });

  return (
    <>
      <div className={cx(backgroundWrapper)} data-testid="outside"></div>
      <div className={cx(modalWrapper({ size, overflow }), className)} ref={ref} {...rest}>
        {children}
      </div>
    </>
  );
};

export default Modal;
