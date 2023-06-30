'use client';
import { Typography } from '@/components';
import { title } from './LoginTitle.css';

const LoginTitle = () => {
  return (
    <>
      <Typography as="p" variant="heading2" className={title}>
        삼성전자 사우들을 위한 먹팟!
      </Typography>
    </>
  );
};

export default LoginTitle;
