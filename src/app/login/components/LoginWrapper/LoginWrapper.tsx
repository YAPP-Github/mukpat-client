'use client';
import { LoginForm, LoginTitle } from '../../components';
import { Content } from '@/components';
import { useIsMobile } from '@/hooks';
import { animate } from '@/styles/theme.css';

const LoginWrapper = () => {
  const mobile = useIsMobile();

  return (
    <div className={animate}>
      <Content verticalCenter={mobile ? false : true}>
        <LoginTitle />
        <LoginForm />
      </Content>
    </div>
  );
};

export default LoginWrapper;
