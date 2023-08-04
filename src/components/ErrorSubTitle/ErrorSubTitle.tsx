import { Typography } from '@/components';

const ErrorSubTitle = () => {
  return (
    <>
      <Typography as="p" variant="body2" color="primary" style={{ textAlign: 'center' }}>
        사내 네트워크를 사용하시는 경우
        <br />
        <Typography as="span" variant="title3" color="primary500">
          개인 네트워크
        </Typography>
        를 이용해주세요.
      </Typography>
    </>
  );
};

export default ErrorSubTitle;
