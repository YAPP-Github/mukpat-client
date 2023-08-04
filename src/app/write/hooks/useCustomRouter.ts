import { useEffect, useRef, useState } from 'react';
import { useRouter as usePrimitiveRouter } from 'next/navigation';
import {
  triggerBeforeRouteChangeEvent,
  triggerRouteChangeStartEvent,
  useFreezeRequestsContext,
} from '@/app/write/contexts/RouteChangeProvider';

interface NavigateOptions {
  scroll?: boolean;
}

type AppRouterInstance = ReturnType<typeof usePrimitiveRouter>;

const createRouterProxy = (router: AppRouterInstance, isFrozen: boolean, signal?: AbortSignal) =>
  new Proxy(router, {
    get: (target, prop, receiver) => {
      if (prop === 'push') {
        return (href: string, options?: NavigateOptions) => {
          const resolvePush = () => {
            triggerRouteChangeStartEvent(href);
            Reflect.apply(target.push, this, [href, options]);
          };

          if (isFrozen) {
            window.addEventListener(
              'routeChangeConfirmationEvent',
              (ev) => {
                if (ev.detail.targetUrl === href) resolvePush();
              },
              { signal },
            );

            triggerBeforeRouteChangeEvent(href);
            return;
          }
          resolvePush();
        };
      }

      return Reflect.get(target, prop, receiver);
    },
  });

const useCustomRouter = (): AppRouterInstance => {
  const router = usePrimitiveRouter();
  const { freezeRequests } = useFreezeRequestsContext();
  const abortControllerRef = useRef(new AbortController());
  const [routerProxy, setRouterProxy] = useState<AppRouterInstance>(
    createRouterProxy(router, freezeRequests.length !== 0, abortControllerRef.current.signal),
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => abortControllerRef.current.abort();
  }, []);

  useEffect(() => {
    abortControllerRef.current.abort();
    const abortController = new AbortController();

    setRouterProxy(createRouterProxy(router, freezeRequests.length !== 0, abortController.signal));

    return () => abortController.abort();
  }, [router, freezeRequests]);

  return routerProxy;
};

export default useCustomRouter;
