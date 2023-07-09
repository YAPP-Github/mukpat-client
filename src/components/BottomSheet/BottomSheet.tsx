'use client';

import { ComponentProps } from 'react';
import BottomSheetView from './BottomSheetView';
import { useLockScroll, useModalControl } from '@/hooks';

type BottomSheetProps = Omit<ComponentProps<typeof BottomSheetView>, 'isOpen'>;

const BottomSheet = ({ title, onClose, ...rest }: BottomSheetProps) => {
  useLockScroll();
  const { ref, isOpen, closeModalWithTransition } = useModalControl({ onClose });

  return <BottomSheetView ref={ref} title={title} isOpen={isOpen} onClose={closeModalWithTransition} {...rest} />;
};

export default BottomSheet;
