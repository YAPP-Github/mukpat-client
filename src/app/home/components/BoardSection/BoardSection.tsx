import { SvgIcon, Typography } from '@/components';
import { Suspense } from '@suspensive/react';
import {
  HydratedBoardCardList,
  BoardCardListLoading,
  RegionsFilter,
  RegionsFilterLoading,
} from '@/app/home/components';
import { section, title } from './BoardSection.css';

const BoardSection = async () => {
  return (
    <section className={section}>
      <Typography variant="heading2" as="h2" color="navy" className={title}>
        지금 먹팟 <SvgIcon id="lightning" width="24" height="24" />을 찾고 있는 동료
      </Typography>
      <Suspense fallback={<RegionsFilterLoading />}>
        <RegionsFilter />
      </Suspense>
      <Suspense fallback={<BoardCardListLoading />}>
        <HydratedBoardCardList />
      </Suspense>
    </section>
  );
};

export default BoardSection;
