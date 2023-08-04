import ky, { AfterResponseHook } from 'ky';
import { ResponseData } from '@/types/data';
import { userAPI } from '@/api/user/api';

const getProcessedResponse = (response: ResponseData) => {
  return new Response(JSON.stringify(response?.result ?? response?.message), {
    status: response.status,
  });
};

/** response 에서 필요한 데이터 추출 및 에러 전처리 */
const processResponse: AfterResponseHook = async (request, options, response) => {
  if (response.status === 204) {
    return new Response(undefined, { status: response.status });
  } else if (response.status === 498) {
    await userAPI.postRefresh();
    const data: ResponseData = await ky(request).json();
    return getProcessedResponse(data);
  }

  const data: ResponseData = await response?.json();
  return getProcessedResponse(data);
};

export { processResponse };
