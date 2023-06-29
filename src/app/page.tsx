import { Content } from '@/components';
import { Header } from '@/components/server';

import { HeroSection, BoardSection } from '@/app/home/components';

export default async function Home() {
  return (
    <>
      <Header />
      <Content>
        <HeroSection />
        <BoardSection />
      </Content>
    </>
  );
}
