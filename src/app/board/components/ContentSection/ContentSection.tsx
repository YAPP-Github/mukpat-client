import Link from 'next/link';
import { IconButton, Typography, Dropdown } from '@/components';
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
  footerButtons,
  disabledLink,
} from './ContentSection.css';

interface Props {
  board: BoardDetail;
}

const ContentSection = ({ board }: Props) => {
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
  } = board;

  return (
    <section>
      <Typography variant="heading1" as="p" className={headerText}>
        <span
          className={statusText({
            active: status === '모집중',
          })}
        >
          {getBoardStatusText(status)}
        </span>
        {title}
      </Typography>
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
      <div className={contentWrapper}>
        {content}
        <Dropdown>
          <Dropdown.Button size="small" placeholder="지역 선택" />
          <Dropdown.Modal>
            <Dropdown.Item size="small" itemKey="seoul">
              서울
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="gyeonggi">
              경기도
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="gangwon">
              강원도
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="1">
              1
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="2">
              2
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="3">
              3
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="4">
              4
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="5">
              5
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="6">
              6
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="7">
              7
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="8">
              8
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="9">
              9
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="10">
              10
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="11">
              11
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="12">
              12
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="13">
              13
            </Dropdown.Item>
            <Dropdown.Item size="small" itemKey="14">
              14
            </Dropdown.Item>
          </Dropdown.Modal>
        </Dropdown>
        {/* 바텀시트 내부에 위치한 드랍다운 테스트 해보기 */}
      </div>
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
          <Link
            href={`/board/${prevId}`}
            className={disabledLink({
              disabled: !prevId,
            })}
          >
            <IconButton iconType="chevronleft" hover disabled={!prevId} />
          </Link>
          <Link
            href={`/board/${nextId}`}
            className={disabledLink({
              disabled: !nextId,
            })}
          >
            <IconButton iconType="chevronright" hover disabled={!nextId} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
