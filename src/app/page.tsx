import { Content } from '@/components';
import { Header } from '@/components/server';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { getBoardList } from '@/app/home/api';
import { HeroSection, BoardSection } from '@/app/home/components';
import getQueryClient from '@/utils/getQueryClients';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery(['boardList'], () => getBoardList(undefined, 4));
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Header />
      <Content>
        <HeroSection />
        <Hydrate state={dehydratedState}>
          <BoardSection />
        </Hydrate>
      </Content>
    </>
  );
}
