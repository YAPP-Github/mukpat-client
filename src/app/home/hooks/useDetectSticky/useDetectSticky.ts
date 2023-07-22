import { useIsMobile, useIntersectObserver } from '@/hooks';
import { FILTER_POS } from '@/app/home/constants';

const useDetectSticky = () => {
  const isMobile = useIsMobile();

  const [ref, entry] = useIntersectObserver<HTMLDivElement>({
    rootMargin: `-${FILTER_POS[isMobile ? 'MOBILE' : 'DESKTOP']}px 0px 0px 0px`,
    threshold: [1],
  });

  const isSticky = entry ? entry.intersectionRatio < 1 : false;

  return [ref, isSticky] as const;
};

export default useDetectSticky;
