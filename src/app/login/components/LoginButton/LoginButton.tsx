'use client';
import { BottomButton, Button, IconButton, Typography } from '@/components';
import { buttonWrapper, persistentButton, buttonList, requiredFields, signup, login } from './LoginButton.css';
import { useRouter } from 'next/navigation';
import { useLoginContext } from '../../contexts/LoginContext';
import { useIsMobile } from '@/hooks';
interface LoginButtonProps {
  submitErrorMsg?: string;
}
const LoginButton = ({ submitErrorMsg }: LoginButtonProps) => {
  const { keep, setKeep } = useLoginContext();
  const mobile = useIsMobile();
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
      <div className={buttonList}>
        <Button size="large" color="primary" type="submit" className={login}>
          로그인
        </Button>
        <div className={requiredFields}>{submitErrorMsg}</div>
        <Button
          color="text"
          size={mobile ? 'paddingSmall' : 'large'}
          onClick={onClickSignup}
          className={signup}
          type="button"
        >
          회원가입
        </Button>
        <BottomButton type="submit" errorMsg={submitErrorMsg}>
          로그인
        </BottomButton>
      </div>
    </div>
  );
};

export default LoginButton;
