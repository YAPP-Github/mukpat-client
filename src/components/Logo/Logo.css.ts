import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { color, space } = themeTokens;

export const logo = style({
	...fontVariant.title3,
	backgroundColor: color.grey100,
	width: space['7xl'],
	height: space['7xl'],
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: color.grey400,
	flexShrink: 0,
});
