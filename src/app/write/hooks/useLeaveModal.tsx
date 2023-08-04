import { useOverlay } from '@/hooks';
import useRouteChangeEvents from '../contexts/RouteChangeProvider';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { FreezeModal } from '@/app/write/components';
import useFormStore from '../store/useFormStore';

const useLeaveModal = (shouldPreventRouteChange: boolean) => {
  const [openModal, closeModal] = useOverlay();
  const { reset } = useFormStore();
  const router = useRouter();
  useRouteChangeEvents({
    onBeforeRouteChange: useCallback(
      (targetUrl: string) => {
        if (shouldPreventRouteChange) {
          openModal(
            <FreezeModal
              onClose={closeModal}
              onClick={() => {
                if (reset) reset();
                router.push(targetUrl);
                closeModal();
              }}
            />,
          );

          return false;
        }
        return true;
      },
      [closeModal, openModal, reset, router, shouldPreventRouteChange],
    ),
  });
};

export default useLeaveModal;
