import { Logo } from '@/components';
import { api } from '@/api';
import { actions } from './Header.css';
import HeaderWrapper from './HeaderWrapper';
import LoginActions from './LoginActions';
import UnloginActions from './UnloginActions';

interface Props {
  /** 헤더의 action buttons가 필요한지의 여부 */
  actionRequired?: boolean;
}

const Header = async ({ actionRequired = true }: Props) => {
  const profile = await api.user.getProfile();

  return (
    <HeaderWrapper>
      <Logo />
      {actionRequired && (
        <div className={actions}>{profile ? <LoginActions profile={profile} /> : <UnloginActions />}</div>
      )}
    </HeaderWrapper>
  );
};

export default Header;
