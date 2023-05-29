import cx from 'classnames';

import { type ProfileVariants, wrapper } from './Profile.css';

type ProfileProps = { uid: number; nickname: string } & ProfileVariants;

const Profile = ({ uid, nickname, size = 'small', ...rest }: ProfileProps) => {
	const colorVariant =
		uid % 5 === 0 ? 'purple' : uid % 5 === 1 ? 'pink' : uid % 5 === 2 ? 'orange' : uid % 5 === 3 ? 'yellow' : 'skyblue';
	return (
		<div className={cx(wrapper({ color: colorVariant, size }))} {...rest} data-testid="profile">
			{nickname.split(' ')[0][0].toUpperCase()}
		</div>
	);
};

export default Profile;
