'use client';

import { useContext, createContext, ReactNode, useMemo, useState } from 'react';

interface LoginContextValue {
  keep: string;
  setKeep: (keep: string) => void;
}

const LoginContext = createContext<LoginContextValue | null>(null);

const LoginContextProvider = ({ children }: { children: ReactNode }) => {
  const [keep, setKeep] = useState('N');

  const contextValue = useMemo(() => ({ keep, setKeep }), [keep, setKeep]);

  return <LoginContext.Provider value={contextValue}>{children}</LoginContext.Provider>;
};

const useLoginContext = () => {
  const ctx = useContext(LoginContext);
  if (!ctx) throw new Error('Cannot find LoginContext. It should be wrapped within LoginContextProvider.');
  return ctx;
};

export { LoginContextProvider, useLoginContext };
