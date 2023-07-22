import { Content } from '@/components';
import { Header } from '@/components/server';

import { HeroSection, BoardSection, FloatingButton } from '@/app/home/components';
import { Suspense } from '@suspensive/react';

export default async function Home() {
  return (
    <>
      <Header />
      <Content>
        <Suspense>
          <HeroSection />
        </Suspense>
        <BoardSection />
      </Content>
      <FloatingButton />
    </>
  );
}
