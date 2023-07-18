import { useState, useEffect } from 'react';
import { useIsMobile, useIntersectObserver } from '@/hooks';

const useDetectSticky = () => {
  const isMobile = useIsMobile();
  const [isSticky, setIsSticky] = useState(false);
  const [ref, entry] = useIntersectObserver<HTMLDivElement>({
    rootMargin: `-${isMobile ? 56 : 80}px 0px 0px 0px`,
    threshold: [1],
  });

  useEffect(() => {
    if (entry) {
      setIsSticky(entry.intersectionRatio < 1);
    }
  }, [entry]);

  return [ref, isSticky] as const;
};

export default useDetectSticky;
