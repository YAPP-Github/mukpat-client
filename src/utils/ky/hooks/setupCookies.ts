import { cookies } from 'next/headers';

const COOKIE_KEYS = ['accessToken', 'refreshToken'];

const getCookieKeyValues = (keys: string[]) => keys.map((key) => `${key}=${cookies().get(key)?.value}`).join('; ');

const setupCookies = (request: Request) => {
	if (COOKIE_KEYS.every((key) => cookies().has(key))) {
		request.headers.set('Cookie', getCookieKeyValues(COOKIE_KEYS));
	}
};

export { setupCookies };
