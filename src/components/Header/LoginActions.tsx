import Link from 'next/link';
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Profile,
  SvgIcon,
  Typography,
} from '@/components';
import { useLogout } from '@/api/user';
import { type Profile as ProfileData } from '@/types/data';
import { dropdownToggle, pcActionButton, profileWrapper } from './Header.css';

interface Props {
  profile: ProfileData;
}

const LoginActions = ({ profile }: Props) => {
  const { mutate: logout } = useLogout();

  return (
    <>
      <Link href={'/write'} className={pcActionButton}>
        <Button color="explain" size="paddingSmall">
          <Typography variant="label3" color="white">
            먹팟 만들기
          </Typography>
        </Button>
      </Link>
      <Dropdown>
        <DropdownToggle className={dropdownToggle}>
          <div className={profileWrapper}>
            <Profile uid={profile.userId} nickname={profile.nickName} size="full" fontSize="large" />
          </div>
          <SvgIcon id="chevrondown" width={24} height={24} />
        </DropdownToggle>
        <DropdownMenu placement="bottomRight" style={{ width: '236px' }}>
          <DropdownItem itemKey="logout" onClick={logout}>
            로그아웃
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default LoginActions;
