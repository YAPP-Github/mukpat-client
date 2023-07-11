'use client';

import { useProfile } from '@/api/hooks';
import { actions } from './Header.css';
import LoginActions from './LoginActions';
import UnloginActions from './UnloginActions';
import FeedbackAction from './FeedbackAction';

const HeaderActions = () => {
  const { data: profile } = useProfile();

  return (
    <div className={actions}>
      <FeedbackAction />
      {profile ? <LoginActions profile={profile} /> : <UnloginActions />}
    </div>
  );
};

export default HeaderActions;
