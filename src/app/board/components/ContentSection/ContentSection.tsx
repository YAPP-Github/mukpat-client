import { PropsWithChildren } from 'react';
import { Typography } from '@/components';
import { getBoardStatusText } from '@/app/board/utils';
import { BoardDetail } from '@/api/types';

import {
  headerText,
  statusText,
  infoBanner,
  infoBannerItem,
  contentWrapper,
  footer,
  footerText,
  childrenWrapper,
} from './ContentSection.css';
import FooterButtons from './FooterLinkButtons';

interface Props extends PropsWithChildren {
  board: BoardDetail;
}

const ContentSection = ({ board, children }: Props) => {
  const {
    status,
    title,
    meetingDate,
    meetingTime,
    locationName,
    locationDetail,
    minAge,
    maxAge,
    content,
    createDate,
    views,
    prevId,
    nextId,
    x,
    y,
  } = board;

  return (
    <section>
      <p className={headerText}>
        <span
          className={statusText({
            active: status === '모집중',
          })}
        >
          {getBoardStatusText(status)}
        </span>
        {title}
      </p>
      <ul className={infoBanner}>
        <li className={infoBannerItem}>
          <Typography variant="label3" color="hint">
            날짜
          </Typography>
          <Typography variant="label3" color="primary">
            {meetingDate}
          </Typography>
        </li>
        <li className={infoBannerItem}>
          <Typography variant="label3" color="hint">
            시간
          </Typography>
          <Typography variant="label3" color="primary">
            {meetingTime}
          </Typography>
        </li>
        <li className={infoBannerItem}>
          <Typography variant="label3" color="hint">
            만날 위치
          </Typography>
          <Typography variant="label3" color="primary">
            <a
              href={`https://map.kakao.com/link/to/${locationName},${y},${x}`}
              target="_blank"
              style={{
                textDecoration: 'underline',
              }}
            >
              {locationName}
            </a>
          </Typography>
        </li>
        <li className={infoBannerItem}>
          <Typography variant="label3" color="hint">
            상세 주소
          </Typography>
          <Typography variant="label3" color="primary">
            {locationDetail}
          </Typography>
        </li>
        {Boolean(minAge && maxAge) && (
          <li className={infoBannerItem}>
            <Typography variant="label3" color="hint">
              참여 가능 나이
            </Typography>
            <Typography variant="label3" color="primary">
              {`${minAge}세 - ${maxAge}세`}
            </Typography>
          </li>
        )}
      </ul>
      <div className={contentWrapper}>{content}</div>
      <div className={childrenWrapper}>{children}</div>
      <div className={footer}>
        <div className={footerText}>
          <Typography variant="label3" color="hint">
            {createDate}
          </Typography>
          <Typography variant="label3" color="hint">
            조회수 {views}
          </Typography>
        </div>
        <FooterButtons nextId={nextId} prevId={prevId} />
      </div>
    </section>
  );
};

export default ContentSection;
