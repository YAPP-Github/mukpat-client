'use client';
import React, { useContext, createContext, ReactNode, useMemo, useState } from 'react';

interface UserInfo {
  email: string;
  password: string;
}
interface SignupContextValue {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
}
const SignupContext = createContext<SignupContextValue | null>(null);

const SignupContextProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const contextValue = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo]);

  return <SignupContext.Provider value={contextValue}>{children}</SignupContext.Provider>;
};

const useSignupContext = () => {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error('Cannot find SignupContext. It should be wrapped within SignupContextProvider.');
  return ctx;
};

export { SignupContextProvider, useSignupContext };
