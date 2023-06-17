import { BeforeErrorHook } from 'ky';

/** error에 대한 전처리 작업 */
export const processError: BeforeErrorHook = async (error) => {
	const { response } = error;

	if (response.status === 404) {
		error.message = 'Not Found';
	} else if (response && response.body) {
		error.message = await response.json();
	} else {
		error.message = '알 수 없는 에러 입니다.';
	}

	return error;
};
