import { globalStyle, style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const { color, space, fontSize, fontWeight, borderRadius } = themeTokens;

export const clearButton = style({
	position: 'absolute',
	right: space['md'],
	width: space['2xl'],
	height: space['2xl'],
	border: 'none',
	background: 'transparent',
	selectors: {
		'&:disabled': {
			display: 'none',
		},
	},
});

export const formWrapper = style({
	position: 'relative',
	display: 'grid',
	width: 'inherit',
	gridAutoFlow: 'row',
	gap: space.lg,
});

export const section = recipe({
	variants: {
		direction: {
			column: {
				display: 'grid',
				gridAutoFlow: 'row',
				justifyContent: 'flex-start',
				gap: space.sm,
			},
			row: {
				display: 'grid',
				gridAutoFlow: 'column',
				justifyContent: 'space-between',
				alignItems: 'center',
			},
		},
	},
});

export const inputWrapper = style({
	width: 'inherit',
	position: 'relative',
	display: 'grid',
	gridAutoFlow: 'column',
	alignItems: 'center',
});

export const textareaWrapper = style({
	width: 'inherit',
	display: 'grid',
	gridAutoFlow: 'row',
	gap: space.sm,
});

export const inputBase = recipe({
	base: {
		fontFamily: 'Pretendard Variable, Pretendard, -apple-system',
		minWidth: '400px',
		fontSize: fontSize.md,
		padding: space.lg,
		backgroundColor: color.grey50,
		color: color.hint,
		borderRadius: borderRadius.md,
		border: `1px solid ${color.grey100}`,
		selectors: {
			'&:not(:focus)': {
				color: color.primary,
			},
			'&:not(:disabled):focus': {
				color: color.primary,
				border: `1px solid ${color.primary500}`,
			},
		},
	},
	variants: {
		type: {
			textArea: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				padding: '16px',
				gap: '8px',
				width: '674px',
				height: '299px',
			},
			date: {
				selectors: {
					'&::-webkit-calendar-picker-indicator': {
						cursor: 'pointer',
						width: '24px',
						marginBottom: space.sm,
						backgroundImage: `url('/icons/caretdown/default.svg')`,
						backgroundSize: 'cover',
					},
				},
			},
			email: {
				width: '194px',
			},
			title: {
				fontSize: fontSize.xl,
				fontWeight: fontWeight.semibold,
			},
		},
	},
});

export const inputError = style({
	border: `1px solid ${color.red500}`,
});

globalStyle(`${clearButton} > img`, {
	margin: '0 auto',
	backgroundPosition: 'center',
});

globalStyle(`${textareaWrapper} > p`, {
	textAlign: 'end',
});

export type InputVariants = RecipeVariants<typeof inputBase>;
// export type Size = NonNullable<InputVariants>['size'];
export type Type = NonNullable<InputVariants>['type'];

export type sectionVariants = RecipeVariants<typeof section>;
export type Direction = NonNullable<sectionVariants>['direction'];
