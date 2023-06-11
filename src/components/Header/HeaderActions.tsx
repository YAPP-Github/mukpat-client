'use client';

import { Profile } from '@/types/data';
import { actions } from './Header.css';
import LoginActions from './LoginActions';
import UnloginActions from './UnloginActions';
import { usePathname } from 'next/navigation';

interface Props {
	profile?: Profile;
}

const NO_ACTION_PAGES = ['/login', '/signup'];

const HeaderActions = ({ profile }: Props) => {
	const currentPage = usePathname();

	return (
		!NO_ACTION_PAGES.includes(currentPage) && (
			<div className={actions}>{profile ? <LoginActions profile={profile} /> : <UnloginActions />}</div>
		)
	);
};

export default HeaderActions;
