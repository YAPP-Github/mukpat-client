import { Logo } from '@/components';
import HeaderWrapper from './HeaderWrapper';
import HeaderActions from './HeaderActions';
import FeedbackAction from './FeedbackAction';
import HeaderDataLayer from './HeaderDataLayer';
import { actions } from './Header.css';

interface Props {
  /** 헤더의 action buttons가 필요한지의 여부 */
  actionRequired?: boolean;
}

const Header = async ({ actionRequired = true }: Props) => {
  return (
    <HeaderWrapper>
      <HeaderDataLayer />
      <Logo />
      <div className={actions}>
        <FeedbackAction />
        {actionRequired && <HeaderActions />}
      </div>
    </HeaderWrapper>
  );
};

export default Header;
