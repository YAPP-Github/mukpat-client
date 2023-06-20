import { Typography } from '@/components';
import { Suspense } from '@suspensive/react';
import { HydratedBoardCardList } from '@/app/home/components';
import { section, title } from './BoardSection.css';

// TODO : Suspense 내 로딩 폴백 교체하기

const BoardSection = async () => {
  return (
    <section className={section}>
      <Typography variant="heading2" as="h2" color="navy" className={title}>
        지금 먹팟을 찾고 있는 동료
      </Typography>
      <Suspense fallback={<div>loading...</div>}>
        <HydratedBoardCardList />
      </Suspense>
    </section>
  );
};

export default BoardSection;
