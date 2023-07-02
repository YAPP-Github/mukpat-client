'use client';

import React, { useEffect, forwardRef, RefObject } from 'react';
import loading from './loading.json';
import lottie from 'lottie-web';
import { loadingWrapper, backgroundWrapper } from './Loading.css';

interface LoadingProps {
  width?: number;
  height?: number;
}
const Loading = forwardRef<HTMLDivElement, LoadingProps>(({ width = 50, height = 50 }: LoadingProps, ref) => {
  const loadingRef = ref as RefObject<HTMLDivElement>;
  useEffect(() => {
    lottie.loadAnimation({
      container: loadingRef?.current as Element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loading,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
  }, []);
  return (
    <div className={loadingWrapper}>
      <div className={backgroundWrapper}> </div>
      <div ref={loadingRef} style={{ width, height }}></div>
    </div>
  );
});

Loading.displayName = 'Loading';
export default Loading;
