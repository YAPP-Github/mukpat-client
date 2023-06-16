import { AfterResponseHook } from 'ky';
import { ResponseData } from '@/types/data';

/** response 에서 필요한 데이터 추출 및 에러 전처리 */
const processResponse: AfterResponseHook = async (request, options, response) => {
	if (response.status === 204) {
		return new Response(undefined, { status: 204 });
	}

	const data: ResponseData = await response?.json();
	return new Response(JSON.stringify(data?.result ?? data?.message), {
		status: response.status,
	});
};

export { processResponse };
