import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';

const { color, borderRadius, space } = themeTokens;

export const checkButton = style({
	selectors: {
		'&:hover': {
			backgroundColor: color.disable,
			borderRadius: borderRadius.circle,
			boxShadow: `0 0 0 ${space['2xs']} rgba(28, 26, 66, 0.04)`,
		},
	},
});

export const checkBox = recipe({
	base: {
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		gap: '0.625rem',
		padding: space.xs,
		paddingRight: 0,
	},
	variants: {
		variant: {
			default: {
				width: 'max-content',
			},
			filled: {
				padding: `${space.lg} 1.375rem`,
				backgroundColor: color.grey50,
				border: `1px solid ${color.grey100}`,
				borderRadius: borderRadius.md,
			},
		},
		error: {
			true: {},
			false: {},
		},
		checked: {
			true: {},
			false: {},
		},
	},
	compoundVariants: [
		{
			variants: {
				variant: 'filled',
				checked: true,
			},
			style: {
				backgroundColor: color.primary50,
				borderColor: color.primary100,
			},
		},
		{
			variants: {
				variant: 'filled',
				checked: false,
				error: true,
			},
			style: {
				borderColor: color.red500,
			},
		},
	],
});

export const checkBoxText = recipe({
	base: {
		...fontVariant.label2,
		color: color.sub,
		userSelect: 'none',
	},
	variants: {
		variant: {
			default: {},
			filled: {},
		},
		checked: {
			true: {},
			false: {},
		},
	},
	compoundVariants: [
		{
			variants: {
				checked: true,
				variant: 'filled',
			},
			style: {
				color: color.primary,
			},
		},
	],
});

export type Variant = NonNullable<RecipeVariants<typeof checkBox>>['variant'];
