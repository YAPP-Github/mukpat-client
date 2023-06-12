// server 컴포넌트에서 API 요청시 사용하는 ky 인스턴스
import ky from 'ky';

import { processResponse } from './hooks/processResponse';
import { setupCookies } from './hooks/setupCookies';

const PREFIX_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : process.env.API_URL;

export const serverRequest = ky.create({
	prefixUrl: PREFIX_URL,
	hooks: {
		beforeRequest: [setupCookies],
		afterResponse: [processResponse],
	},
});
