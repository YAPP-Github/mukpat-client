'use client';
import { Button, Typography, BottomButton } from '@/components';
import { useRouter } from 'next/navigation';
import { welcomeWrapper, title, description, login } from './SuccessLogin.css';
import Image from 'next/image';

const SuccessLogin = () => {
  const router = useRouter();
  const onClick = () => {
    router.replace('/login');
  };
  return (
    <div className={welcomeWrapper}>
      <Image src={'/spriteIcons/check-info.svg'} alt="check" width={60} height={60} />
      <Typography as="p" variant="heading2" color="primary500" className={title}>
        회원가입을 완료했습니다.
      </Typography>
      <Typography as="p" variant="body2" color="primary" className={description}>
        먹팟에서 새로운 사람들을 만나보세요 !
      </Typography>
      <Button size="large" onClick={onClick} className={login}>
        로그인하기
      </Button>
      <BottomButton type="submit" onClick={onClick}>
        로그인하기
      </BottomButton>
    </div>
  );
};
export default SuccessLogin;
