'use client';

import { Header } from '@/components/server';
import { useIsMobile } from '@/hooks';
import { BottomButton, Button, Content, ErrorMessage } from '@/components';
import { useRouter } from 'next/navigation';

const Error = ({ reset }: { reset: () => void }) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleClickRetry = () => {
    reset();
    router.push('/');
  };

  return (
    <>
      <Header actionRequired={false} />
      <Content>
        <ErrorMessage title="에러가 발생했습니다." subTitle="다시 한번 시도해 주세요.">
          {!isMobile && (
            <Button size="large" onClick={handleClickRetry}>
              홈으로 돌아가기
            </Button>
          )}
          <BottomButton onClick={handleClickRetry}>홈으로 돌아가기</BottomButton>
        </ErrorMessage>
      </Content>
    </>
  );
};

export default Error;
