'use client';

import { useIsMobile } from '@/hooks';
import { BottomButton, Button, Content, ErrorMessage, ErrorHeader, ErrorSubTitle } from '@/components';
import { useRouter } from 'next/navigation';
import { HTTPError } from 'ky';

const ErrorPage = ({ reset }: { reset: () => void; error: HTTPError }) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleClickRetry = () => {
    reset();
    router.push('/');
  };

  return (
    <>
      <ErrorHeader />
      <Content>
        <ErrorMessage title="에러가 발생했습니다." subTitle={<ErrorSubTitle />}>
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

export default ErrorPage;
