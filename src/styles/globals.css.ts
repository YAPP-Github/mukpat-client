import { themeTokens } from './theme.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle(':root', {
	maxWidth: '1100px',
	borderRadius: '12px',
	fontFamily: [
		'Pretendard Variable',
		'Pretendard',
		'-apple-system',
		'BlinkMacSystemFont',
		'system-ui',
		'Roboto',
		'Helvetica Neue',
		'Segoe UI',
		'Apple SD Gothic Neo',
		'Noto Sans KR',
		'Malgun Gothic',
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol',
		'sans-serif',
	],
});

globalStyle('html, body', {
	fontFamily: 'Spartan, sans-serif',
	fontWeight: 700,
	maxWidth: '100vw',
	overflowX: 'hidden',
});

globalStyle(`img, picture, video, canvas, svg`, {
	display: `block`,
	maxWidth: `100%`,
});

globalStyle('body', {
	fontSize: themeTokens.fontSize.sm,
	maxWidth: '100vw',
	overflowX: 'hidden',
});

globalStyle('*', {
	boxSizing: 'border-box',
	padding: 0,
	margin: 0,
});

globalStyle('a', {
	color: 'inherit',
	textDecoration: 'none',
});
