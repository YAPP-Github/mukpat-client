import { Logo } from '@/components';
import HeaderWrapper from '@/components/Header/HeaderWrapper';
import { actions } from '@/components/Header/Header.css';
import FeedbackAction from '@/components/Header/FeedbackAction';

const ErrorHeader = () => {
  return (
    <div>
      <HeaderWrapper>
        <Logo />
        <div className={actions}>
          <FeedbackAction />
        </div>
      </HeaderWrapper>
    </div>
  );
};

export default ErrorHeader;
