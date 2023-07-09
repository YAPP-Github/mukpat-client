import { useLayoutEffect } from 'react';

const useLockScroll = () => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
};

export default useLockScroll;
