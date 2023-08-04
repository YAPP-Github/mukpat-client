import { useEffect, useRef, useCallback } from 'react';
import { useClickOutside, useBooleanState } from '@/hooks';

interface Props {
  isDropdownOpen: boolean;
  onClose: () => void;
}

const useDropdownBottomSheet = ({ isDropdownOpen, onClose }: Props) => {
  const firstRender = useRef(true);
  const [isOpen, setOpen, setClose] = useBooleanState(false);
  const closeStatus = useRef(false);

  const openBottomSheet = useCallback(() => {
    closeStatus.current = false;
    setOpen();
  }, [setOpen]);

  const closeBottomSheet = useCallback(() => {
    closeStatus.current = true;
    setClose();
  }, [setClose]);

  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      closeBottomSheet();
    },
  });

  const handleTransitionEnd = useCallback(
    (event: TransitionEvent) => {
      if (event.propertyName === 'transform' && closeStatus.current) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    if (isDropdownOpen) {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [isDropdownOpen, openBottomSheet, closeBottomSheet]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    element.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      element.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [ref, handleTransitionEnd]);

  return [ref, isOpen, openBottomSheet, closeBottomSheet] as const;
};

export default useDropdownBottomSheet;
