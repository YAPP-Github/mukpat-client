import { wrapper, header, skeleton, titleStyle, body, footer } from './BoardCardListLoading.css';
import { BOARDS_PER_PAGE } from '@/app/home/constants';

const BoardCardSkeleton = () => {
  return (
    <div className={wrapper}>
      <div className={header}>
        <div
          className={skeleton({
            width: 'sm',
            height: 'md',
          })}
        />
        <div
          className={skeleton({
            width: '2xs',
            height: 'md',
          })}
        />
      </div>
      <div className={titleStyle}>
        <div
          className={skeleton({
            width: 'md',
            height: 'md',
          })}
        />
      </div>
      <div className={body}>
        <div
          className={skeleton({
            width: 'full',
            height: 'md',
          })}
        />
        <div
          className={skeleton({
            width: 'full',
            height: 'md',
          })}
        />
      </div>
      <div className={footer}>
        <div
          className={skeleton({
            width: 'xs',
            height: 'sm',
          })}
        />
        <div
          className={skeleton({
            width: 'full',
            height: 'lg',
          })}
        />
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
