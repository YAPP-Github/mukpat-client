import { Logo } from '@/components';
import { Profile } from '@/types/data';
import { api } from '@/utils/api';
import HeaderWrapper from './HeaderWrapper';
import HeaderActions from './HeaderActions';

const fetchProfile = async () => {
	const data = await api
		.get('v1/users/profile', {
			credentials: 'include',
		})
		.json<Profile | ''>();

	return typeof data !== 'string' ? data : undefined;
};

const Header = async () => {
	const profile = await fetchProfile();

	return (
		<HeaderWrapper>
			<Logo />
			<HeaderActions profile={profile} />
		</HeaderWrapper>
	);
};

export default Header;
