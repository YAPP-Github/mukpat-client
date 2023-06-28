'use client';

import { useParams } from 'next/navigation';
import { useBoardDetail } from '@/app/board/hooks';
import { IconButton, Typography } from '@/components';
import { infoBanner, infoBannerItem, contentWrapper, footer, footerText, footerButtons } from './ContentSection.css';

// TODO
// [ ] 이전페이지 다음 페이지 버튼 연결

const ContentSection = () => {
  const params = useParams();
  const {
    data: { meetingDate, meetingTime, locationName, locationDetail, minAge, maxAge, content, createDate, views },
  } = useBoardDetail(params.id);

  return (
    <section>
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
            {locationName}
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
        {minAge && maxAge && (
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
      <div className={footer}>
        <div className={footerText}>
          <Typography variant="label3" color="hint">
            {createDate}
          </Typography>
          <Typography variant="label3" color="hint">
            조회수 {views}
          </Typography>
        </div>
        <div className={footerButtons}>
          <IconButton iconType="chevronleft" hover />
          <IconButton iconType="chevronright" hover />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
