'use client';

import { useIsMobile } from '@/hooks';
import { BottomButton, Button, Content, ErrorHeader, ErrorMessage, ErrorSubTitle } from '@/components';
import { useRouter, notFound } from 'next/navigation';
import { HTTPError } from 'ky';

const ErrorPage = ({ reset, error }: { reset: () => void; error: HTTPError }) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleClickRetry = () => {
    reset();
    router.push('/');
  };

  if (error.response.status === 400) {
    notFound();
  }

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
