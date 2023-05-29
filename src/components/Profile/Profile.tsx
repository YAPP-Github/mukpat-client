import cx from 'classnames';

import { type ProfileVariants, wrapper } from './Profile.css';

type ProfileProps = { uid: number; nickname: string } & ProfileVariants;

const Profile = ({ uid, nickname, size = 'small', ...rest }: ProfileProps) => {
	const colorMap: Array<ProfileProps['color']> = ['purple', 'pink', 'orange', 'yellow', 'skyblue'];
	return (
		<div className={cx(wrapper({ color: colorMap[uid % 5], size }))} {...rest} data-testid="profile">
			{nickname.trim()[0].toUpperCase()}
		</div>
	);
};

export default Profile;
