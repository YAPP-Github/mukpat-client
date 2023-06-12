import { AfterResponseHook } from 'ky';
import { ApiResponse } from '@/types/data';

// response 에서 필요한 데이터(result)만 추출
const processResponse: AfterResponseHook = async (request, options, response) => {
	// 에러 발생시 에러를 반환
	if (!response.ok) {
		// 추가적인 에러 대응 정책 필요
		const errorBody: ApiResponse = await response.json();
		if (errorBody.status === 404) {
			throw new Error('Not Found');
		}
		throw new Error(errorBody.message);
	}

	if (response.status === 204) {
		// https://github.com/vercel/next.js/pull/48354
		return new Response('', { status: 200 });
	}

	const body: ApiResponse = await response.json();
	return new Response(JSON.stringify(body.result), {
		status: response.status,
	});
};

export { processResponse };
