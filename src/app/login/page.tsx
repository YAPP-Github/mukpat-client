import { LoginWrapper } from './components';
import { Header } from '@/components/server';
import { LoginContextProvider } from './contexts/LoginContext';
const login = () => {
  return (
    <LoginContextProvider>
      <>
        <Header />
        <LoginWrapper />
      </>
    </LoginContextProvider>
  );
};

export default login;
