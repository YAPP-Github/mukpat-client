'use client';

import { useIsMobile } from '@/hooks';
import { BottomButton, Button, Content, ErrorHeader, ErrorMessage } from '@/components';
import { useRouter } from 'next/navigation';

const NotFoundErrorPage = () => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleClickRetry = () => {
    router.push('/');
    router.refresh();
  };

  return (
    <>
      <ErrorHeader />
      <Content>
        <ErrorMessage title="페이지를 찾을 수 없습니다." subTitle="다시 한번 시도해 주세요.">
          {!isMobile && (
            <Button size="large" onClick={handleClickRetry}>
              다시 시도하기
            </Button>
          )}
          <BottomButton onClick={handleClickRetry}>다시 시도하기</BottomButton>
        </ErrorMessage>
      </Content>
    </>
  );
};

export default NotFoundErrorPage;
