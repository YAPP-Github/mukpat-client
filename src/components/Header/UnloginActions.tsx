import { Button } from '@/components';
import { useLoginRedirect } from '@/hooks';
import Link from 'next/link';
import { actionButton } from './Header.css';

const UnloginActions = () => {
  const { loginPath } = useLoginRedirect();
  return (
    <Link href={`${loginPath}`}>
      <Button color="primary" size="paddingSmall" className={actionButton}>
        로그인
      </Button>
    </Link>
  );
};

export default UnloginActions;
