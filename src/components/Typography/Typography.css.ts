import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant, colorVariant } from '@/styles/variant.css';

const { color, space, borderRadius } = themeTokens;

export const typoVariant = recipe({
	base: {
		position: 'relative',
	},
	variants: {
		color: colorVariant,
		variant: fontVariant,
		required: {
			true: {
				selectors: {
					'&::after': {
						content: '',
						width: space['2xs'],
						height: space['2xs'],
						backgroundColor: color.red500,
						display: 'inline-block',
						borderRadius: borderRadius.circle,
						marginLeft: space['3xs'],
						position: 'absolute',
						top: '0',
					},
				},
			},
		},
	},
	defaultVariants: {
		required: false,
	},
});

export type TypoVariant = RecipeVariants<typeof typoVariant>;
export type Color = NonNullable<TypoVariant>['color'];
export type Variant = NonNullable<TypoVariant>['variant'];
export type Required = NonNullable<TypoVariant>['required'];
