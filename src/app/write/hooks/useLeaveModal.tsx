import { useOverlay } from '@/hooks';
import useRouteChangeEvents from '../contexts/RouteChangeProvider';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FreezeModal } from '@/app/write/components';

const useLeaveModal = (shouldPreventRouteChange: boolean) => {
  const [openModal, closeModal] = useOverlay();
  const router = useRouter();
  useRouteChangeEvents({
    onBeforeRouteChange: useCallback(
      (targetUrl: string) => {
        if (shouldPreventRouteChange) {
          openModal(
            <FreezeModal
              onClose={closeModal}
              onClick={() => {
                router.push(targetUrl);
                closeModal();
              }}
            />,
          );

          return false;
        }
        return true;
      },
      [closeModal, openModal, router, shouldPreventRouteChange],
    ),
  });
};

export default useLeaveModal;
