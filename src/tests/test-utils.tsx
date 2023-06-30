// 테스트 환경에서 컴포넌트를 렌더링할때 사용되는 공통 provider를 세팅
// reference : https://testing-library.com/docs/react-testing-library/setup/
import { ReactElement, ReactNode, Suspense } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryProvider } from '@/providers';

export const AllProviders = ({ children }: { children: ReactNode }) => {
	return (
		<QueryProvider
			queryConfig={{
				defaultOptions: {
					// https://tanstack.com/query/v4/docs/react/guides/testing#turn-off-retries
					queries: {
						retry: false,
					},
				},
			}}
		>
			<Suspense>{children}</Suspense>
		</QueryProvider>
	);
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
	render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
