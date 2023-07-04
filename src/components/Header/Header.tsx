import { Logo } from '@/components';
import { Suspense } from '@suspensive/react';
import HeaderWrapper from './HeaderWrapper';
import HydratedHeaderActions from './HydratedHeaderActions';

interface Props {
  /** 헤더의 action buttons가 필요한지의 여부 */
  actionRequired?: boolean;
}

const Header = async ({ actionRequired = true }: Props) => {
  return (
    <HeaderWrapper>
      <Logo />
      {actionRequired && (
        <Suspense>
          <HydratedHeaderActions />
        </Suspense>
      )}
    </HeaderWrapper>
  );
};

export default Header;
