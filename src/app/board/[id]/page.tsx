import { Header } from '@/components/server';
import { Content } from '@/components';
import { BoardDetail } from '@/app/board/components';

// 나중에 추가 예정
const BoardDetailPage = () => {
  // prefetchQuery

  return (
    <>
      <Header />
      <Content>
        {/* hydration? */}
        <BoardDetail />
      </Content>
    </>
  );
};

export default BoardDetailPage;
