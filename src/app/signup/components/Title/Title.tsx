'use client';
import { Typography } from '@/components';
import { type TitleType, title } from './Title.css';
import { HTMLAttributes } from 'react';

type TitleProps = {
  textAlign?: TitleType;
} & HTMLAttributes<HTMLDivElement>;

const Title = ({ textAlign = 'center', children }: TitleProps) => {
  return (
    <>
      <Typography as="p" variant="heading2" className={title({ textAlign })}>
        {children}
      </Typography>
    </>
  );
};

export default Title;
