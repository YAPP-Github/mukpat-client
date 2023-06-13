import { AfterResponseHook } from 'ky';
import { ResponseData } from '@/types/data';

// response 에서 필요한 데이터(result)만 추출
const processResponse: AfterResponseHook = async (request, options, response) => {
	if (response.status === 204) {
		// Empty response
		// https://github.com/vercel/next.js/pull/48354
		return new Response(undefined, { status: 204 });
	}

	const data: ResponseData = await response?.json();
	// 에러 발생시 에러를 반환
	if (!response.ok) {
		// 추가적인 에러 대응 정책 필요
		if (data.status === 404) throw new Error('Not Found');
		throw new Error(data?.message);
	}

	return new Response(JSON.stringify(data?.result), {
		status: response.status,
	});
};

export { processResponse };
