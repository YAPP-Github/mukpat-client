import cx from 'classnames';

import { ProfileColor, ProfileFontSize, ProfileSize, colorVariant, wrapper } from './Profile.css';
import { typedKeys } from '@/utils/typedKeys';
import { HTMLAttributes } from 'react';

interface ProfileProps extends HTMLAttributes<HTMLDivElement> {
  /** 유저 고유 닉네임 */
  nickname: string;

  /**유저 고유 id */
  uid?: number;

  /** 프로필 컬러  @default 'grey' */
  color?: ProfileColor;

  /** 프로필 사이즈 @default 'small'*/
  size?: ProfileSize;

  /** 프로필 폰트 사이즈 @default 'medium'*/
  fontSize?: ProfileFontSize;

  /** 추가 클래스명 */
  className?: string;
}

const Profile = ({ nickname, uid, color = 'grey', size, fontSize, className, ...rest }: ProfileProps) => {
  const colors = typedKeys(colorVariant);
  const profileColor = uid ? colors[uid % colors.length] : color;
  const profileText = uid ? nickname[0].toUpperCase() : nickname;

  return (
    <div {...rest} className={cx(wrapper({ color: profileColor, size, fontSize }), className)} data-testid="profile">
      {profileText}
    </div>
  );
};

export default Profile;
