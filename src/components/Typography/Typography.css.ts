import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { fontVariant, colorVariant } from '@/styles/variant.css';

export const typoVariant = recipe({
	variants: {
		color: colorVariant,
		variant: fontVariant,
	},
});

export type TypoVariant = RecipeVariants<typeof typoVariant>;
