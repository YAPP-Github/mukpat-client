'use client';

import { Profile } from '@/types/data';
import { actions } from './Header.css';
import LoginActions from './LoginActions';
import UnloginActions from './UnloginActions';

interface Props {
	// 로그인한 사용자 프로필 정보
	profile?: Profile;
	// 우측에 action 버튼들이 필요없는지에 대한 여부
	noAction?: boolean;
}

const HeaderActions = ({ profile, noAction = false }: Props) => {
	const isActionNeed = !noAction;
	return (
		isActionNeed && <div className={actions}>{profile ? <LoginActions profile={profile} /> : <UnloginActions />}</div>
	);
};

export default HeaderActions;
