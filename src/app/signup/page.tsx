import { Header } from '@/components/server';
import { Content } from '@/components';
import { SignUpWrapper } from './components';
import { SignupContextProvider } from './contexts/SignupContext';
const signup = () => {
  return (
    <>
      <Header />
      <SignUpWrapper />
    </>
  );
};

export default signup;
