import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getQueryClients';
import { api, queryKeys } from '@/api';
import HeaderActions from './HeaderActions';

const HydratedHeaderActions = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKeys.user.profile(), () => api.user.getProfile());
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HeaderActions />
    </Hydrate>
  );
};

export default HydratedHeaderActions;
