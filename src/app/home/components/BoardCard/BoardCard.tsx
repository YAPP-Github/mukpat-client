import Link from 'next/link';
import { Chip, Profile, SvgIcon, Typography } from '@/components';
import { BoardListItem } from '@/api/types';
import { getChipColor } from '@/app/home/utils/chipColor';

import {
  wrapper,
  header,
  chips,
  titleStyle,
  body,
  bodyItem,
  bodyItemText,
  footer,
  participantsCount,
  participantsList,
} from './BoardCard.css';

interface Props {
  boardListItem: BoardListItem;
}

const BoardCard = ({ boardListItem }: Props) => {
  const {
    boardId,
    status,
    todayOrTomorrow,
    elapsedTime,
    title,
    meetingDateTime,
    meetingPlace,
    currentApply,
    maxApply,
    participants,
  } = boardListItem;

  return (
    <Link href={`/board/${boardId}`}>
      <li className={wrapper}>
        <div className={header}>
          <div className={chips}>
            <Chip color={getChipColor(status)}>{status}</Chip>
            {todayOrTomorrow && <Chip color={getChipColor(todayOrTomorrow)}>{todayOrTomorrow}</Chip>}
          </div>
          <Typography variant="label2" color="sub">
            {elapsedTime}
          </Typography>
        </div>
        <Typography className={titleStyle} variant="title1" color="primary">
          {title}
        </Typography>
        <div className={body}>
          <div className={bodyItem}>
            <SvgIcon id="calendar" color="grey300" width={24} height={24} />
            <Typography variant="body2" color="primary" className={bodyItemText}>
              {meetingDateTime}
            </Typography>
          </div>
          <div className={bodyItem}>
            <SvgIcon id="map" color="grey300" width={24} height={24} />
            <Typography variant="body2" color="primary" className={bodyItemText}>
              {meetingPlace}
            </Typography>
          </div>
        </div>
        <div className={footer}>
          <div className={participantsCount}>
            <Typography color="hint" variant="label3">
              참여 멤버
            </Typography>
            <Typography color="sub" variant="label3">
              {currentApply}/{maxApply}
            </Typography>
          </div>
          <div className={participantsList}>
            {participants.map(({ userId, nickName }, idx) => (
              <Profile
                key={idx}
                uid={userId}
                nickname={nickName}
                {...(!userId && {
                  fontSize: 'small',
                })}
              />
            ))}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default BoardCard;
