import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

const isServer = typeof window === 'undefined';

const COOKIE_KEYS = ['accessToken', 'refreshToken'];

const hasEveryCookies = (cookieStore: ReadonlyRequestCookies) => COOKIE_KEYS.every((key) => cookieStore.has(key));

const getCookieKeyValues = (cookieStore: ReadonlyRequestCookies) =>
	COOKIE_KEYS.map((key) => `${key}=${cookieStore.get(key)?.value}`).join('; ');

/** 발급받은 쿠키들을 헤더에 설정 */
const setupCookies = async (request: Request) => {
	if (!isServer) return void 0;
	const { cookies } = await import('next/headers');
	const cookieStore = cookies();
	if (cookieStore && hasEveryCookies(cookieStore)) {
		request.headers.set('Cookie', getCookieKeyValues(cookieStore));
	}
};

export { setupCookies };
