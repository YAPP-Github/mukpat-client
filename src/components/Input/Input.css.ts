import { style } from '@vanilla-extract/css';
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

export const inputContainer = recipe({
	base: {
		width: 'inherit',
		position: 'relative',
		display: 'flex',
	},
	variants: {
		size: {
			small: {
				flexDirection: 'column',
				gap: '1rem',
				alignItems: 'flex-start',
			},
			medium: {
				flexDirection: 'column',
				gap: '1rem',
				alignItems: 'flex-start',
			},
			large: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
			},
		},
	},
	defaultVariants: {
		size: 'large',
	},
});

export const inputWrapper = recipe({
	base: {
		padding: space.lg,
		backgroundColor: color.grey50,
		caretColor: color.primary500,
		color: color.hint,
		borderRadius: borderRadius.md,
		border: `1px solid ${color.grey100}`,
		selectors: {
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

export type InputVariants = RecipeVariants<typeof inputWrapper>;
export type Size = NonNullable<InputVariants>['size'];
