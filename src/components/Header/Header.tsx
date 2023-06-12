import { Logo } from '@/components';
import { serverRequest } from '@/utils/ky/serverRequest';
import HeaderWrapper from './HeaderWrapper';
import HeaderActions from './HeaderActions';
import { Profile } from '@/types/data';

const fetchProfile = async () => {
	const data = await serverRequest
		.get('v1/users/profile', {
			credentials: 'include',
		})
		.json<Profile | ''>();
	return typeof data !== 'string' ? data : undefined;
};

interface Props {
	// 헤더의 action buttons가 필요한지의 여부
	noAction?: boolean;
}

const Header = async ({ noAction }: Props) => {
	const profile = await fetchProfile();
	return (
		<HeaderWrapper>
			<Logo />
			<HeaderActions noAction={noAction} profile={profile} />
		</HeaderWrapper>
	);
};

export default Header;
