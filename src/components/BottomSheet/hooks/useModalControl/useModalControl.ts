import { useState, useEffect, useRef } from 'react';

interface Props {
  onClose: () => void;
}
const useModalControl = ({ onClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeStatus = useRef(false);
  const closeModalWithTransition = () => {
    closeStatus.current = true;
    setIsOpen(false);
  };
  const openModalWithTransition = () => {
    setIsOpen(true);
  };

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
