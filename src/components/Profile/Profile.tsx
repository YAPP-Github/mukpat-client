import cx from 'classnames';

import { ProfileColor, ProfileSize, colorVariant, wrapper } from './Profile.css';
import { typedKeys } from '@/utils/typedKeys';

/**
 * 프로필 공통 컴포넌트
 * @property {number} uid - 유저 고유 id
 * @property {string} nickname - 유저 고유 닉네임
 * @property {ProfileColor} color? - 프로필 컬러
 * @property {ProfileSize} size? - 프로필 사이즈
 */
type ProfileProps = {
	uid: number;
	nickname: string;
	color?: ProfileColor;
	size?: ProfileSize;
};

const Profile = ({ uid, nickname, color, size, ...rest }: ProfileProps) => {
	const colors = typedKeys(colorVariant);
	color = color ? color : colors[uid % colors.length];
	return (
		<div {...rest} className={cx(wrapper({ color, size }))} data-testid="profile">
			{nickname.trim()[0].toUpperCase()}
		</div>
	);
};

export default Profile;
