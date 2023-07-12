'use client';

import { useProfile } from '@/api/hooks';
import LoginActions from './LoginActions';
import UnloginActions from './UnloginActions';

const HeaderActions = () => {
  const { data: profile } = useProfile();

  return <>{profile ? <LoginActions profile={profile} /> : <UnloginActions />}</>;
};

export default HeaderActions;
