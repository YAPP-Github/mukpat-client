'use client';

import { useIsMobile } from '@/hooks';
import { BottomButton, Button, Content, ErrorHeader, ErrorMessage, Typography } from '@/components';
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
        <ErrorMessage
          title="에러가 발생했습니다."
          subTitle={
            <Typography as="p" variant="body2" color="primary" style={{ textAlign: 'center' }}>
              사내 네트워크를 사용하시는 경우
              <br />
              <Typography as="span" variant="title3" color="primary500">
                개인 네트워크
              </Typography>
              를 이용해주세요.
            </Typography>
          }
        >
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
