'use client';

import Link from 'next/link';
import { useIsMobile } from '@/hooks';
import { useProfile } from '@/api/hooks';
import { Button, SvgIcon } from '@/components';
import { buttonWrapper } from './FloatingButton.css';

const FloatingButton = () => {
  const { data: profile } = useProfile();
  const isMobile = useIsMobile();

  return (
    isMobile &&
    profile && (
      <Link href="/write">
        <Button className={buttonWrapper}>
          <SvgIcon id="pluswhite" width={20} height={20} />
        </Button>
      </Link>
    )
  );
};

export default FloatingButton;
