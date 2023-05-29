import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { space, color, borderRadius } = themeTokens;

export const wrapper = recipe({
	base: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 'fit-content',
		padding: `${space['2xs']} ${space['md']}`,
		borderRadius: borderRadius['xs'],
		gap: space['2xs'],
	},
	variants: {
		color: {
			yellow: {
				backgroundColor: color.yellow200,
				color: color.yellow800,
			},
			skyblue: {
				backgroundColor: color.skyblue200,
				color: color.skyblue800,
			},
			grey: {
				backgroundColor: color.grey200,
				color: color.sub,
			},
			primary: {
				backgroundColor: color.primary100,
				color: color.primary500,
			},
		},
	},
});

export const content = recipe({
	variants: {
		size: {
			md: fontVariant.label3,
			sm: fontVariant.label5,
		},
	},
});

export type ChipWrapperVariants = RecipeVariants<typeof wrapper>;
export type ChipContentVariants = RecipeVariants<typeof content>;
