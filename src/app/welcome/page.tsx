import { SuccessLogin } from './components';
import { Header } from '@/components/server';
import { Content } from '@/components';

const welcome = () => {
  return (
    <>
      <Header actionRequired={false} />
      <Content>
        <SuccessLogin />
      </Content>
    </>
  );
};

export default welcome;
