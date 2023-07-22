import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from '@/hooks';
import { BreakPoints } from '@/styles/theme.css';

export const MEDIA_STATE = {
  LOADING: 'LOADING',
  GREATER: 'GREATER',
  LESS: 'LESS',
} as const;

export type MediaState = (typeof MEDIA_STATE)[keyof typeof MEDIA_STATE];

const useLoadingMediaQuery = (breakpoint: BreakPoints = 'm') => {
  const [mediaState, setMediaState] = useState<MediaState>(MEDIA_STATE.LOADING);
  const satisfyQuery = useMediaQuery({ bp: breakpoint });

  useLayoutEffect(() => {
    setMediaState(satisfyQuery ? MEDIA_STATE.LESS : MEDIA_STATE.GREATER);
  }, [satisfyQuery]);

  return mediaState;
};

export default useLoadingMediaQuery;
