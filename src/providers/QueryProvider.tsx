'use client';

import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface Props extends PropsWithChildren {
  queryConfig?: QueryClientConfig;
}

export default function Provider({ children, queryConfig }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        ...queryConfig?.defaultOptions,
        defaultOptions: {
          ...queryConfig?.defaultOptions?.queries,
          queries: {
            suspense: true,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
