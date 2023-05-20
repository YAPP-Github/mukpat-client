'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Providers({ children }: React.PropsWithChildren) {
	const [queryClient] = React.useState(() => new QueryClient());

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
