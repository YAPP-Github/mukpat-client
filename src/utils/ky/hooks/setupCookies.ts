import { cookies } from 'next/headers';

const COOKIE_KEYS = ['accessToken', 'refreshToken'];

const getCookieKeyValues = (keys: string[]) => keys.map((key) => `${key}=${cookies().get(key)?.value}`).join('; ');

/** 발급받은 쿠키들을 헤더에 설정 */
const setupCookies = (request: Request) => {
	if (COOKIE_KEYS.every((key) => cookies().has(key))) {
		request.headers.set('Cookie', getCookieKeyValues(COOKIE_KEYS));
	}
};

export { setupCookies };
