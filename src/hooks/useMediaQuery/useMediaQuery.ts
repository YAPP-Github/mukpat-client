import { useState, useEffect } from 'react';
import { breakPoints, BreakPoints } from '@/styles/theme.css';

interface MqProps {
  bp: BreakPoints;
}

const useMediaQuery = (props: MqProps): boolean => {
  const query = `(max-width:${breakPoints[props.bp]}px)`;

  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [handleChange, query]);
  return matches;
};

export default useMediaQuery;
