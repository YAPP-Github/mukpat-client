import { AsideSection, HeaderSection, ContentSection } from '@/app/board/components';

const BoardDetail = () => {
  return (
    <>
      <HeaderSection />
      <div style={{ display: 'flex', gap: '24px' }}>
        <ContentSection />
        <AsideSection />
      </div>
    </>
  );
};

export default BoardDetail;
