import { globalStyle, style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { fontVariant } from '@/styles/variant.css';

const { color, space, fontSize, borderRadius } = themeTokens;

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

export const inputWrapper = style({
	width: 'inherit',
	position: 'relative',
	display: 'grid',
	gridAutoFlow: 'column',
	alignItems: 'center',
});

export const inputBase = recipe({
	base: {
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
			textarea: 'textarea',
			date: 'date',
			search: 'search',
		},
		size: {
			small: { width: '200px' },
			medium: { width: '400px' },
			large: { width: '505px' },
		},
	},
	compoundVariants: [
		{
			variants: { type: 'textarea' },
			style: {
				position: 'relative',
				marginBottom: '6px',
				width: '100%',
			},
		},
		{
			variants: { type: 'date' },
			style: {
				selectors: {
					'&::before': {
						content: `attr(placeholder)`,
						width: '100%',
					},
					'&::-webkit-calendar-picker-indicator': {
						cursor: 'pointer',
						backgroundImage: `url('/icons/calendar/default.svg')`, // caretdown으로 교체
						backgroundSize: 'cover',
					},
				},
			},
		},
	],
	defaultVariants: {
		size: 'medium',
	},
});

export const inputError = style({
	border: `1px solid ${color.red500}`,
});

globalStyle(`${clearButton} > img`, {
	margin: '0 auto',
	backgroundPosition: 'center',
});

export type InputVariants = RecipeVariants<typeof inputBase>;
export type Size = NonNullable<InputVariants>['size'];
export type Type = NonNullable<InputVariants>['type'];
