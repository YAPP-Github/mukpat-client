import { useBooleanState } from '@/hooks';
import { useCallback, useEffect } from 'react';

const usePreventClose = () => {
  const [bool, setTrue, setFalse] = useBooleanState();
  const preventClose = useCallback(
    (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      setTrue();
    },
    [setTrue],
  );

  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, [preventClose]);

  return [bool, setFalse] as const;
};

export default usePreventClose;
