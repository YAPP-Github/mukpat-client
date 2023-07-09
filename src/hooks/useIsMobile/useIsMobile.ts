import { useEffect, useState } from 'react';
import useMediaQuery from '../useMediaQuery/useMediaQuery';

const useIsMobile = () => {
  const [isMobile, setMobile] = useState<boolean>(false);
  const mobile = useMediaQuery({ bp: 'm' });
  useEffect(() => {
    setMobile(mobile);
  }, [mobile]);
  return isMobile;
};

export default useIsMobile;
