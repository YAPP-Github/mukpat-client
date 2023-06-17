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
import { type Profile as ProfileData } from '@/types/data';
import { dropdownToggle } from './Header.css';

interface Props {
	profile: ProfileData;
}

const LoginActions = ({ profile }: Props) => {
	const { userId, nickName } = profile;

	return (
		<>
			<Button color="explain" size="micro">
				<Typography variant="label3" color="white">
					먹팟 만들기
				</Typography>
			</Button>
			<Dropdown>
				<DropdownToggle className={dropdownToggle}>
					<Profile uid={userId} nickname={nickName} size="medium" />
					<SvgIcon id="chevrondown" width={24} height={24} />
				</DropdownToggle>
				<DropdownMenu placement="bottomRight" style={{ width: '236px' }}>
					<DropdownItem itemKey="logout">로그아웃</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</>
	);
};

export default LoginActions;
