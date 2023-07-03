'use client';
import { Button, IconButton, Typography } from '@/components';
import { buttonWrapper, persistentButton, loginButton, requiredFields } from './LoginButton.css';
import { useRouter } from 'next/navigation';
import { useLoginContext } from '../../contexts/LoginContext';

interface LoginButtonProps {
  fieldErrorMsg?: string;
}
const LoginButton = ({ fieldErrorMsg }: LoginButtonProps) => {
  const { keep, setKeep } = useLoginContext();
  const router = useRouter();

  const onClickPersistentButton = () => {
    const changedKeep = keep === 'N' ? 'Y' : 'N';
    setKeep(changedKeep);
  };
  const onClickSignup = () => {
    router.push('/signup');
  };
  return (
    <div className={buttonWrapper}>
      <div className={persistentButton}>
        <IconButton
          iconType="check"
          width={24}
          height={24}
          hover={false}
          active={true}
          onClick={onClickPersistentButton}
          type="button"
        />
        <Typography variant="label2" as="p" color="sub">
          로그인 유지
        </Typography>
      </div>
      <div className={loginButton}>
        <Button size="large" color="primary" type="submit">
          로그인
        </Button>
        <div className={requiredFields}>{fieldErrorMsg}</div>
        <Button size="large" color="text" onClick={onClickSignup} type="button">
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default LoginButton;
