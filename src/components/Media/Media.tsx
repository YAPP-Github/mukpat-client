'use client';

import { useState, useLayoutEffect, PropsWithChildren } from 'react';
import { useMediaQuery } from '@/hooks';
import { BreakPoints } from '@/styles/theme.css';

interface Props extends PropsWithChildren {
  greaterThan?: BreakPoints;
  lessThan?: BreakPoints;
}

const Media = ({ greaterThan, lessThan, children }: Props) => {
  const [loading, setLoading] = useState(true);
  const [, setMobile] = useState<boolean>(false);

  const satisfyQuery = useMediaQuery({ bp: greaterThan ?? lessThan ?? 'm' });
  const condition = lessThan ? satisfyQuery : !satisfyQuery;

  useLayoutEffect(() => {
    setMobile(satisfyQuery);
    setLoading(false);
  }, [satisfyQuery]);

  if (loading) {
    return null;
  }

  return condition ? children : null;
};

export default Media;
