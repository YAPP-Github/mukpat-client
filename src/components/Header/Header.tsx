import { Logo } from '@/components';
import HeaderWrapper from './HeaderWrapper';
import HeaderActions from './HeaderActions';

interface Props {
  /** 헤더의 action buttons가 필요한지의 여부 */
  actionRequired?: boolean;
}

const Header = async ({ actionRequired = true }: Props) => {
  return (
    <HeaderWrapper>
      <Logo />
      {actionRequired && <HeaderActions />}
    </HeaderWrapper>
  );
};

export default Header;
