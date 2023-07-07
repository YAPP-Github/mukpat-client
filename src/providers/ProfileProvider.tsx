import { ReactNode } from 'react';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import getQueryClient from '@/utils/getQueryClients';
import { api, queryKeys } from '@/api';

const ProfileProvider = async ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKeys.user.profile(), () => api.user.getProfile());
  const dehydratedState = dehydrate(queryClient);

  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
};

export default ProfileProvider;
