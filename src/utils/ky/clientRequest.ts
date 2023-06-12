// client 컴포넌트에서 API 요청시 사용하는 ky 인스턴스
import ky from 'ky';
import { processResponse } from './hooks/processResponse';

const PREFIX_URL =
	process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : process.env.NEXT_PUBLIC_API_URL;

export const clientRequest = ky.create({
	prefixUrl: PREFIX_URL,
	hooks: {
		afterResponse: [processResponse],
	},
});
