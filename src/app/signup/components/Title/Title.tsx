'use client';
import { Typography } from '@/components';
import { type TitleType, title } from './Title.css';
import { HTMLAttributes } from 'react';
import { useIsMobile } from '@/hooks';
type TitleProps = {
  textAlign?: TitleType;
} & HTMLAttributes<HTMLDivElement>;

const Title = ({ textAlign = 'center', children }: TitleProps) => {
  const mobile = useIsMobile();
  return (
    <>
      <Typography as="p" variant={mobile ? 'title1' : 'heading2'} className={title({ textAlign })}>
        {children}
      </Typography>
    </>
  );
};

export default Title;
