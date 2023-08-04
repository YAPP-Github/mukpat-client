'use client';
import { LoginForm, LoginTitle } from '../../components';
import { Content } from '@/components';
import { animate } from '@/styles/theme.css';
import { Media } from '@/components';
const LoginWrapper = () => {
  return (
    <div className={animate}>
      <Media breakpoint="m" fallback={<></>}>
        <Media.Less>
          <Content verticalCenter={false}>
            <LoginTitle />
            <LoginForm />
          </Content>
        </Media.Less>
        <Media.Greater>
          <Content verticalCenter={true}>
            <LoginTitle />
            <LoginForm />
          </Content>
        </Media.Greater>
      </Media>
    </div>
  );
};

export default LoginWrapper;
