'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useRegionsFilterStore } from '@/store';

const LogoLink = ({ children }: { children: ReactNode }) => {
  const { initialize: initFilter } = useRegionsFilterStore(({ initialize }) => ({
    initialize,
  }));
  return (
    <Link href="/" onClick={initFilter}>
      {children}
    </Link>
  );
};

export default LogoLink;
