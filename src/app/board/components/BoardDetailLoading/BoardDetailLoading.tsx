import { Skeleton, SvgIcon } from '@/components';

import {
  menuButton,
  wrapper,
  title,
  infoBanner,
  footer,
  footerText,
  footerButtons,
  flexAlignCenter,
  flexColumn,
  mobileListSection,
  list,
  listItem,
  asideSection,
  mobileBottomButton,
} from './BoardDetailLoading.css';

const ParticipantsSkeleton = () => {
  return (
    <>
      <Skeleton width="77px" height="20px" />
      <div className={list}>
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            <div className={listItem} key={idx}>
              <Skeleton width="40px" height="40px" radius="circle" />
              <div className={flexColumn}>
                <Skeleton width="120px" height="18px" mb="2px" />
                <Skeleton width="32px" height="18px" />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const BoardDetailLoading = () => {
  return (
    <div className={wrapper}>
      <SvgIcon id="dot" width={36} height={36} className={menuButton} />
      <div>
        <Skeleton className={title} />
        <div className={infoBanner}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div className={flexAlignCenter} key={index}>
                <Skeleton width="80px" height="20px" mr="60px" />
                <Skeleton width={index % 2 === 0 ? '305px' : '240px'} height="20px" />
              </div>
            ))}
        </div>
        <div className={mobileListSection}>
          <ParticipantsSkeleton />
        </div>
        <div className={footer}>
          <div className={footerText}>
            <Skeleton width="124px" height="20px" />
            <Skeleton width="49px" height="20px" />
          </div>
          <div className={footerButtons}>
            <Skeleton width="36px" height="36px" />
            <Skeleton width="36px" height="36px" />
          </div>
        </div>
      </div>
      <div className={asideSection}>
        <ParticipantsSkeleton />
        <Skeleton width="274px" height="54px" radius="md" />
      </div>
      <div className={mobileBottomButton}>
        <Skeleton width="100%" height="54px" />
      </div>
    </div>
  );
};

export default BoardDetailLoading;
