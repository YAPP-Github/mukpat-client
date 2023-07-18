import { Skeleton } from '@/components';
import {
  wrapper,
  header,
  headerLeft,
  headerRight,
  titleStyle,
  body,
  bodyItem,
  footer,
  footerParticipants,
} from './BoardCardListLoading.css';
import { BOARDS_PER_PAGE } from '@/app/home/constants';

const BoardCardSkeleton = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={headerLeft}>
          <Skeleton width="100%" height="100%" />
        </div>
        <div className={headerRight}>
          <Skeleton width="100%" height="100%" />
        </div>
      </div>
      <div className={titleStyle}>
        <Skeleton width="50%" height="100%" />
      </div>
      <div className={body}>
        <div className={bodyItem}>
          <Skeleton width="100%" height="100%" />
        </div>
        <div className={bodyItem}>
          <Skeleton width="100%" height="100%" />
        </div>
      </div>
      <div className={footer}>
        <Skeleton width="84px" height="20px" />
        <div className={footerParticipants}>
          <Skeleton width="100%" height="40px" />
        </div>
      </div>
    </div>
  );
};

const BoardCardListLoading = () => {
  return (
    <>
      {Array.from({ length: BOARDS_PER_PAGE }).map((_, idx) => (
        <BoardCardSkeleton key={idx} />
      ))}
    </>
  );
};

export default BoardCardListLoading;
