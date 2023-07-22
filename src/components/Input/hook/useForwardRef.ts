import { useRef, useEffect, ForwardedRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useForwardRef = <T>(ref: ForwardedRef<T>, initialValue: any = null) => {
  const targetRef = useRef<T>(initialValue);

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef;
};

export default useForwardRef;
