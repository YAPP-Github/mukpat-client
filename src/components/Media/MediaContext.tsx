'use client';

import { useContext, useMemo, createContext, ReactNode } from 'react';
import { BreakPoints } from '@/styles/theme.css';
import useLoadingMediaQuery, { MEDIA_STATE, MediaState } from './hooks/useLoadingMediaQuery';

interface MediaContextValue {
  mediaState: MediaState;
}

interface ProviderProps {
  breakpoint: BreakPoints;
  fallback?: ReactNode;
  children: ReactNode;
}

const MediaContext = createContext<MediaContextValue | null>(null);

export const MediaContextProvider = ({ breakpoint = 'm', fallback, children }: ProviderProps) => {
  const mediaState = useLoadingMediaQuery(breakpoint);

  const contextValue = useMemo(
    () => ({
      mediaState,
    }),
    [mediaState],
  );

  if (mediaState === MEDIA_STATE.LOADING) return fallback || null;

  return <MediaContext.Provider value={contextValue}>{children}</MediaContext.Provider>;
};

export const useMediaContext = () => {
  const ctx = useContext(MediaContext);
  if (!ctx) throw new Error('Cannot find MediaContext. It should be wrapped within MediaContextProvider.');
  return ctx;
};
