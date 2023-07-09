import { useState, useEffect, useRef } from 'react';
import { useClickOutside } from '@/hooks';

interface Props {
  onClose: () => void;
}
const useModalControl = ({ onClose }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeStatus = useRef(false);
  const closeModalWithTransition = () => {
    closeStatus.current = true;
    setIsOpen(false);
  };
  const openModalWithTransition = () => {
    setIsOpen(true);
  };
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      closeModalWithTransition();
    },
  });
  const handleTransitionEnd = (event: TransitionEvent) => {
    if (event.propertyName === 'transform' && closeStatus.current) {
      onClose();
    }
  };
  useEffect(() => {
    openModalWithTransition();
    const element = ref.current;
    if (!element) return;
    element.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      element.removeEventListener('transitionend', handleTransitionEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isOpen, closeModalWithTransition };
};

export default useModalControl;
