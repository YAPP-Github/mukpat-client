import { Logo } from '@/components';
import HeaderWrapper from './HeaderWrapper';
import HeaderActions from './HeaderActions';
import FeedbackAction from './FeedbackAction';
import HeaderDataLayer from './HeaderDataLayer';
import { actions } from './Header.css';
import { Suspense } from '@suspensive/react';

interface Props {
  /** 헤더의 action buttons가 필요한지의 여부 */
  actionRequired?: boolean;
}

const Header = ({ actionRequired = true }: Props) => {
  return (
    <HeaderWrapper>
      <Suspense>
        <HeaderDataLayer />
      </Suspense>
      <Logo />
      <div className={actions}>
        <FeedbackAction />
        <Suspense>{actionRequired && <HeaderActions />}</Suspense>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
