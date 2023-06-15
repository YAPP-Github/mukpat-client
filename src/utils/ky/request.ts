// client 컴포넌트에서 API 요청시 사용하는 ky 인스턴스
import ky from 'ky';
import { processResponse } from './hooks/processResponse';
import { setupCookies } from './hooks/setupCookies';

const isServer = typeof window === 'undefined';

const getPrefixURL = () => {
	if (process.env.NODE_ENV === 'development') return 'http://localhost:3000/api';
	if (isServer) return process.env.API_URL;
	return process.env.NEXT_PUBLIC_API_URL;
};

const PREFIX_URL = getPrefixURL();

export const request = ky.create({
	prefixUrl: PREFIX_URL,
	hooks: {
		beforeRequest: [setupCookies],
		afterResponse: [processResponse],
	},
	credentials: 'include',
});
