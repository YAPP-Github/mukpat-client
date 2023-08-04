'use client';

import Link from 'next/link';
import { IconButton } from '@/components';
import { useRegionsFilterStore } from '@/store';
import { BoardDetail } from '@/api/types';
import { getQueryString } from '@/utils/queryString';
import { disabledLink, footerButtons } from './ContentSection.css';

interface Props {
  prevId: BoardDetail['prevId'];
  nextId: BoardDetail['nextId'];
}

const FooterLinkButtons = ({ prevId, nextId }: Props) => {
  const { cityId, provinceId } = useRegionsFilterStore(({ cityId, provinceId }) => ({
    cityId,
    provinceId,
  }));

  const isPrevDisabled = prevId === null;
  const isNextDisabled = nextId === null;

  return (
    <div className={footerButtons}>
      <Link
        href={`/board/${prevId}${getQueryString({
          cityId,
          provinceId,
        })}`}
        className={disabledLink({
          disabled: isPrevDisabled,
        })}
      >
        <IconButton iconType="chevronleft" hover disabled={isPrevDisabled} />
      </Link>
      <Link
        href={`/board/${nextId}${getQueryString({
          cityId,
          provinceId,
        })}`}
        className={disabledLink({
          disabled: isNextDisabled,
        })}
      >
        <IconButton iconType="chevronright" hover disabled={isNextDisabled} />
      </Link>
    </div>
  );
};

export default FooterLinkButtons;
