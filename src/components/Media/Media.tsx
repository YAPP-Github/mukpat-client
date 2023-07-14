'use client';

import { ReactNode, PropsWithChildren } from 'react';

import { BreakPoints } from '@/styles/theme.css';
import { MediaContextProvider, useMediaContext } from './MediaContext';
import { MEDIA_STATE } from './hooks/useLoadingMediaQuery';

interface Props extends PropsWithChildren {
  /** 반응형 기준으로 삼을 breakpoint */
  breakpoint: BreakPoints;

  /** media query를 로드할때까지 보여줄 대체 UI */
  fallback?: ReactNode;
}

const Media = ({ breakpoint, fallback, children }: Props) => {
  return (
    <MediaContextProvider breakpoint={breakpoint} fallback={fallback}>
      {children}
    </MediaContextProvider>
  );
};

const MediaLess = ({ children }: { children: ReactNode }) => {
  const { mediaState } = useMediaContext();
  return mediaState === MEDIA_STATE.LESS ? <>{children}</> : null;
};

const MediaGreater = ({ children }: { children: ReactNode }) => {
  const { mediaState } = useMediaContext();
  return mediaState === MEDIA_STATE.GREATER ? <>{children}</> : null;
};

const MediaRoot = Object.assign(Media, {
  Less: MediaLess,
  Greater: MediaGreater,
});

export default MediaRoot;
