'use client';
import { HTMLAttributes } from 'react';
import cx from 'classnames';
import { titleWrapper, background, wrap } from './BottomSheet.css';
import IconButton from '../IconButton/IconButton';
import { useLockScroll } from '@/hooks';
import { useModalControl } from './hooks';

type BottomSheetProps = {
  onClose: () => void;
  title?: string;
} & HTMLAttributes<HTMLDivElement>;

const BottomSheet = ({ className, onClose, title, children, ...rest }: BottomSheetProps) => {
  useLockScroll();
  const { ref, isOpen, closeModalWithTransition } = useModalControl({ onClose });

  return (
    <>
      <div className={cx(background({ open: isOpen }))} data-testid="outside"></div>
      <div className={cx(wrap({ open: isOpen }), className)} {...rest} ref={ref}>
        <div className={titleWrapper}>
          <div>{title}</div>
          <IconButton iconType="close" width={36} height={36} onClick={closeModalWithTransition}></IconButton>
        </div>
        {children}
      </div>
    </>
  );
};

export default BottomSheet;
