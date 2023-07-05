import { Button } from '@/components';
import { useLoginRedirect } from '@/hooks';
import Link from 'next/link';

const UnloginActions = () => {
  const { loginPath } = useLoginRedirect();
  return (
    <Link href={`${loginPath}`}>
      <Button color="explain" size="paddingSmall">
        로그인
      </Button>
    </Link>
  );
};

export default UnloginActions;
