import ky, { AfterResponseHook } from 'ky';
import { ResponseData } from '@/types/data';
import { userAPI } from '@/api/user/api';
/** response 에서 필요한 데이터 추출 및 에러 전처리 */
const processResponse: AfterResponseHook = async (request, options, response) => {
  if (response.status === 204) {
    return new Response(undefined, { status: 204 });
  } else if (response.status === 498) {
    await userAPI.postRefresh();
    return ky(request);
  }
  const data: ResponseData = await response?.json();
  return new Response(JSON.stringify(data?.result ?? data?.message), {
    status: response.status,
  });
};

export { processResponse };
