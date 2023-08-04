'use client';

import { useRef } from 'react';
import { Loading } from '@/components';

const WriteLoadingPage = () => {
  const ref = useRef(null);
  return (
    <div ref={ref}>
      <Loading ref={ref} />
    </div>
  );
};

export default WriteLoadingPage;
