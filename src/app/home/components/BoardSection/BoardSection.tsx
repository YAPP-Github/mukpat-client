import { Typography } from '@/components';
import { Suspense } from '@suspensive/react';
import { BoardCardList } from '@/app/home/components';
import { section, title } from './BoardSection.css';

const BoardSection = () => {
  return (
    <section className={section}>
      <Typography variant="heading2" as="h2" color="navy" className={title}>
        지금 먹팟을 찾고 있는 동료
      </Typography>
      <Suspense fallback={<div>loading</div>}>
        <BoardCardList />
      </Suspense>
    </section>
  );
};

export default BoardSection;
