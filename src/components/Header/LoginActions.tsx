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
import { dropdownToggle } from './Header.css';
import Link from 'next/link';

interface Props {
  profile: ProfileData;
}

const LoginActions = ({ profile }: Props) => {
  const { mutate: logout } = useLogout();

  return (
    <>
      <Link href={'/write'}>
        <Button color="explain" size="paddingSmall">
          <Typography variant="label3" color="white">
            먹팟 만들기
          </Typography>
        </Button>
      </Link>
      <Dropdown>
        <DropdownToggle className={dropdownToggle}>
          <Profile uid={profile.userId} nickname={profile.nickName} size="medium" fontSize="large" />
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
