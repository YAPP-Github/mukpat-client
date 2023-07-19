import { useEffect, useRef } from 'react';
import { useBooleanState } from '@/hooks';

const useScrollDownState = () => {
  const prevScrollRef = useRef<number | null>(null);
  const [isScrollDown, setScrollDownTrue, setScrollDownFalse] = useBooleanState(false);

  useEffect(() => {
    const handleScroll = () => {
      const prevScroll = prevScrollRef.current;
      const currentScroll = window.scrollY;

      if (prevScroll && prevScroll < currentScroll) {
        setScrollDownTrue();
      } else {
        setScrollDownFalse();
      }
      prevScrollRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isScrollDown;
};

export default useScrollDownState;
