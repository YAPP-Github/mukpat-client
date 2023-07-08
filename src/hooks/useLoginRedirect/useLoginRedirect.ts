import { useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const HOME_PATH = '/';
const LOGIN_PATH = '/login';
const REDIRECT_QUERY = 'redirectPath';

const useLoginRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPathname = usePathname();

  const loginPath = `${LOGIN_PATH}?${REDIRECT_QUERY}=${currentPathname}`;

  const redirectToLogin = useCallback(() => {
    router.push(`${LOGIN_PATH}?${REDIRECT_QUERY}=${currentPathname}`);
  }, [router, currentPathname]);

  const redirectBack = useCallback(() => {
    if (searchParams.has(REDIRECT_QUERY)) {
      router.replace(searchParams.get(REDIRECT_QUERY) as string);
    } else {
      router.replace(HOME_PATH);
    }
  }, [router, searchParams]);

  return { loginPath, redirectToLogin, redirectBack };
};

export default useLoginRedirect;
