import { useLayoutEffect } from 'react';

const useLockScroll = (isOpen = true) => {
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
};
export default useLockScroll;
