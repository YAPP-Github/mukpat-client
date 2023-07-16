import { LoginWrapper } from './components';
import { Header } from '@/components/server';
import { LoginContextProvider } from './contexts/LoginContext';
const login = () => {
  return (
    <LoginContextProvider>
      <>
        <Header actionRequired={false}/>
        <LoginWrapper />
      </>
    </LoginContextProvider>
  );
};

export default login;
