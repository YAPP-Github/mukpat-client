import { Header } from '@/components/server';
import { Content } from '@/components';
import { SignUpWrapper } from './components';
import { SignupContextProvider } from './contexts/SignupContext';
const signup = () => {
  return (
    <>
      <Header actionRequired={false} />
      <Content>
        <SignupContextProvider>
          <SignUpWrapper />
        </SignupContextProvider>
      </Content>
    </>
  );
};

export default signup;
