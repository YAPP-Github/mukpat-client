import { LoginForm, LoginTitle } from './components';
import { Content } from '@/components';
import { Header } from '@/components/server';
import { LoginContextProvider } from './contexts/LoginContext';

const login = () => {
  return (
    <LoginContextProvider>
      <>
        <Header actionRequired={false} />
        <Content>
          <LoginTitle />
          <LoginForm />
        </Content>
      </>
    </LoginContextProvider>
  );
};

export default login;
