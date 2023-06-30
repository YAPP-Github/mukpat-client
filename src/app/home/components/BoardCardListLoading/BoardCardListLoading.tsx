import { Skeleton } from '@/components';
import { wrapper, header, titleStyle, body, footer } from './BoardCardListLoading.css';
import { BOARDS_PER_PAGE } from '@/app/home/constants';

const BoardCardSkeleton = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <Skeleton width="74px" height="24px" />
        <Skeleton width="40px" height="24px" />
      </div>
      <div className={titleStyle}>
        <Skeleton width="50%" height="24px" />
      </div>
      <div className={body}>
        <Skeleton width="100%" height="24px" />
        <Skeleton width="100%" height="24px" />
      </div>
      <div className={footer}>
        <Skeleton width="84px" height="20px" />
        <Skeleton width="100%" height="40px" />
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
