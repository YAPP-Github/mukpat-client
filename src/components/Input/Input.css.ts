import { globalStyle, style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const { color, space, borderRadius } = themeTokens;

export const formWrapper = style({
	position: 'relative',
	display: 'flex',
	width: '674px',
	flexDirection: 'column',
	gap: '16px',
});

export const clearButton = style({
	position: 'absolute',
	right: space['md'],
	bottom: space['md'],
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

globalStyle(`${clearButton} > img`, {
	margin: '0 auto',
	backgroundPosition: 'center',
});

export const inputWrapper = style({
	width: 'inherit',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
});

export const input = recipe({
	base: {
		padding: space.lg,
		backgroundColor: color.grey50,
		caretColor: color.primary500,
		color: color.hint,
		borderRadius: borderRadius.md,
		border: `1px solid ${color.grey100}`,
		selectors: {
			'&:not(:disabled):focus:invalid': {
				border: `1px solid ${color.red500}`,
			},
			'&:not(:disabled):focus': {
				color: color.primary,
				border: `1px solid ${color.primary500}`,
			},
		},
	},
	variants: {
		size: {
			small: {
				width: '194px',
			},
			medium: {
				width: '400px',
			},
			large: {
				width: '505px',
			},
		},
	},
	defaultVariants: {
		size: 'large',
	},
});

export type InputVariants = RecipeVariants<typeof input>;
export type Size = NonNullable<InputVariants>['size'];
