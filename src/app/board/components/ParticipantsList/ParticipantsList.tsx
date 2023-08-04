'use client';

import cx from 'classnames';
import { HTMLAttributes } from 'react';
import { Profile, Typography, Chip, SvgIcon } from '@/components';
import { useProfile } from '@/api/hooks';

import { list, listItem, participantProfile, participantProfileText, counterText } from './ParticipantsList.css';
import { BoardDetail } from '@/api/types';

interface Props extends HTMLAttributes<HTMLUListElement> {
  board: BoardDetail;
}

const ParticipantsList = ({ className, board, ...rest }: Props) => {
  const { data: profile } = useProfile();
  const { participants, currentApply, maxApply } = board;

  return (
    <>
      <div className={counterText}>
        <Typography variant="label3" color="hint">
          참여중인 멤버
        </Typography>
        <Typography variant="label3" color="sub">
          {currentApply}/{maxApply}
        </Typography>
      </div>
      <ul className={cx(list, className)} {...rest}>
        {participants.map(({ userId, nickName, jobGroupMain, writer }, idx) => (
          <li key={idx} className={listItem}>
            <div className={participantProfile}>
              <Profile key={userId} nickname={nickName} uid={userId} />
              <div className={participantProfileText}>
                <Typography
                  variant={userId === profile?.userId ? 'title4' : 'label3'}
                  color={userId === profile?.userId ? 'primary500' : 'primary'}
                >
                  {nickName}
                </Typography>
                <Typography variant="body5" color="hint">
                  {jobGroupMain}
                </Typography>
              </div>
            </div>
            {writer && (
              <Chip leftIcon={<SvgIcon id="crown" width={12} height={12} />} color="grey">
                모임장
              </Chip>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ParticipantsList;
