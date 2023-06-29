'use client';

import { ReactNode } from 'react';
import { wrapper } from './Header.css';
import { useIntersectObserver } from '@/hooks';

const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  const [ref, entry] = useIntersectObserver<HTMLDivElement>();
  const scrolled = entry ? !entry.isIntersecting : false;

  return (
    <>
      <div ref={ref} />
      <header className={wrapper({ scrolled })}>{children}</header>
    </>
  );
};

export default HeaderWrapper;
