import { themeTokens } from './theme.css';
import { typedEntries } from '@/utils/typedEntries';

const { fontSize, fontWeight, lineHeights, color } = themeTokens;

// fontsize, fontweight, lineheight 관련 css 속성
export const fontVariant = {
	display1: {
		fontSize: fontSize['9xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['7xl'],
	},
	display2: {
		fontSize: fontSize['8xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['6xl'],
	},
	display3: {
		fontSize: fontSize['7xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['5xl'],
	},
	display4: {
		fontSize: fontSize['6xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['4xl'],
	},
	heading1: {
		fontSize: fontSize['5xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['3xl'],
	},
	heading2: {
		fontSize: fontSize['4xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['2xl'],
	},
	heading3: {
		fontSize: fontSize['3xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['xl'],
	},
	heading4: {
		fontSize: fontSize['2xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['lg'],
	},
	title1: {
		fontSize: fontSize['xl'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['lg'],
	},
	title2: {
		fontSize: fontSize['lg'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['md'],
	},
	title3: {
		fontSize: fontSize['md'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['sm'],
	},
	title4: {
		fontSize: fontSize['sm'],
		fontWeight: fontWeight['bold'],
		lineHeight: lineHeights['xs'],
	},
	body1: {
		fontSize: fontSize['lg'],
		fontWeight: fontWeight['regular'],
		lineHeight: lineHeights['lg'],
	},
	body2: {
		fontSize: fontSize['md'],
		fontWeight: fontWeight['regular'],
		lineHeight: lineHeights['md'],
	},
	body3: {
		fontSize: fontSize['sm'],
		fontWeight: fontWeight['regular'],
		lineHeight: lineHeights['sm'],
	},
	body4: {
		fontSize: fontSize['xs'],
		fontWeight: fontWeight['regular'],
		lineHeight: lineHeights['xs'],
	},
	body5: {
		fontSize: fontSize['2xs'],
		fontWeight: fontWeight['regular'],
		lineHeight: lineHeights['2xs'],
	},
	label1: {
		fontSize: fontSize['lg'],
		fontWeight: fontWeight['semibold'],
		lineHeight: lineHeights['md'],
	},
	label2: {
		fontSize: fontSize['md'],
		lineHeight: lineHeights['sm'],
	},
	label3: {
		fontSize: fontSize['sm'],
		fontWeight: fontWeight['semibold'],
		lineHeight: lineHeights['xs'],
	},
	label4: {
		fontSize: fontSize['xs'],
		fontWeight: fontWeight['semibold'],
		lineHeight: lineHeights['2xs'],
	},
	label5: {
		fontSize: fontSize['2xs'],
		fontWeight: fontWeight['semibold'],
		lineHeight: lineHeights['3xs'],
	},
	label6: {
		fontSize: fontSize['3xs'],
		fontWeight: fontWeight['semibold'],
		lineHeight: lineHeights['4xs'],
	},
};

// textcolor 관련 css 속성
export const colorVariant = typedEntries(color).reduce(
	(acc, [k, v]) => ({ ...acc, [k]: { color: v } }),
	{} as {
		[Property in keyof typeof color]: { color: string };
	},
);
