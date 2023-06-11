import { useState, useCallback } from 'react';
import { api } from '@/utils/api';

const useLoginForm = () => {
	const [error, setError] = useState<Error | null>(null);

	const handleLogin = useCallback(async (email: string, password: string) => {
		try {
			await api
				.post('v1/users/login', {
					json: {
						email,
						password,
						keep: 'N',
					},
				})
				.json();
		} catch (err) {
			setError(new Error('Failed to login'));
		}
	}, []);

	return {
		error,
		handleLogin,
	};
};

export default useLoginForm;
