import { Button } from '@/components';
import Link from 'next/link';

const UnloginActions = () => {
  return (
    <Link href="/login">
      <Button color="explain" size="paddingSmall">
        로그인
      </Button>
    </Link>
  );
};

export default UnloginActions;
