import { themeTokens } from './theme.css';
import { globalStyle } from '@vanilla-extract/css';

// reference1 : https://codesandbox.io/s/calculator-fpg8b?file=/src/styles/reset.css.ts
// reference2: https://www.joshwcomeau.com/css/custom-css-reset/

globalStyle('*, *:before, *:after', {
	boxSizing: 'border-box',
});

globalStyle('html, body', {
	fontFamily:
		'Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, sans-serif',
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

globalStyle('button', {
	backgroundColor: 'transparent',
	borderWidth: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	fontStyle: 'inherit',
	fontWeight: 'inherit',
	lineHeight: 'inherit',
	padding: 0,
	cursor: 'pointer',
});
