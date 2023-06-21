import React, { forwardRef } from 'react';
import Lottie from 'react-lottie';
import loading from './loading.json';
import { loadingWrapper, backgroundWrapper } from './Loading.css';

interface LoadingProps {
  width?: number;
  height?: number;
}

const Loading = forwardRef<HTMLDivElement, LoadingProps>(({ width = 50, height = 50 }, ref) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={loadingWrapper} ref={ref}>
      <div className={backgroundWrapper}> </div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
});

Loading.displayName = 'Loading';
export default Loading;
