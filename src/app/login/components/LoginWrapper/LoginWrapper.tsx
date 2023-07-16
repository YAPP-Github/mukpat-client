'use client';
import { LoginForm, LoginTitle } from '../../components';
import { Content } from '@/components';
import { useIsMobile } from '@/hooks';

const LoginWrapper = () => {
  const mobile = useIsMobile();

  return (
    <>
      <Content verticalCenter={mobile ? false : true}>
        <LoginTitle />
        <LoginForm />
      </Content>
    </>
  );
};

export default LoginWrapper;
