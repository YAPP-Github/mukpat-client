'use client';

import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { getQueryString } from '@/utils/queryString';
import { useRegionsFilterStore } from '@/store';

interface Props extends PropsWithChildren {
  boardId: number;
}

const BoardCardLink = ({ boardId, children }: Props) => {
  const { cityId, provinceId } = useRegionsFilterStore(({ cityId, provinceId }) => ({
    cityId,
    provinceId,
  }));

  return (
    <Link
      href={`/board/${boardId}${getQueryString({
        cityId,
        provinceId,
      })}`}
    >
      {children}
    </Link>
  );
};

export default BoardCardLink;
