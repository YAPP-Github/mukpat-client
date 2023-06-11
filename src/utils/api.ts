import ky from 'ky';

// development에선 현재 api 개발 서버에 대해서 proxy 설정이 되어있음
// next.confg 참고
const PREFIX_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000/api'
		: process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

// const PREFIX_URL = process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL;

export const api = ky.create({
	prefixUrl: PREFIX_URL,
});
