'use client';
import { Typography } from '@/components';
import { title } from './LoginTitle.css';
import { useIsMobile } from '@/hooks';
const LoginTitle = () => {
  const mobile = useIsMobile();
  return (
    <>
      <Typography as="p" variant={mobile ? 'title1' : 'heading2'} className={title}>
        삼성전자 사우들을 위한 먹팟!
      </Typography>
    </>
  );
};

export default LoginTitle;
