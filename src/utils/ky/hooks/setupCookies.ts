import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

const isServer = typeof window === 'undefined';

const COOKIE_KEYS = ['accessToken', 'refreshToken'];

const cookieKeyValues = (cookieStore: ReadonlyRequestCookies) =>
	COOKIE_KEYS.map((key) => `${key}=${cookieStore.get(key)?.value}`).join('; ');

/** 발급받은 쿠키들을 헤더에 설정 */
const setupCookies = async (request: Request) => {
	if (!isServer) return void 0;
	const { cookies } = await import('next/headers');
	const cookieStore = cookies();
	if (cookieStore && COOKIE_KEYS.every((key) => cookieStore.has(key))) {
		request.headers.set('Cookie', cookieKeyValues(cookieStore));
	}
};

export { setupCookies };
