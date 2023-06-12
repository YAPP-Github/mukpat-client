import { useState, useCallback } from 'react';
import { clientRequest } from '@/utils/ky/clientRequest';

const useLoginForm = (onSuccess: () => void) => {
	const [error, setError] = useState<Error | null>(null);

	const handleLogin = useCallback(
		async (email: string, password: string) => {
			try {
				await clientRequest.post('v1/users/login', {
					json: {
						email,
						password,
						keep: 'Y',
					},
				});
				onSuccess();
			} catch (error) {
				// https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
				let message = '';
				if (error instanceof Error) {
					message = error.message;
				} else {
					message = '알 수 없는 에러입니다.';
				}
				setError(new Error(message));
			}
		},
		[onSuccess],
	);

	return {
		error,
		handleLogin,
	};
};

export default useLoginForm;
