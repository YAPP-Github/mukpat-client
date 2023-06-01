import { themeTokens } from '@/styles/theme.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const { fontSize, fontWeight, lineHeights, borderRadius, color } = themeTokens;

export const colorVariant = {
	purple: { background: color.purple500, color: color.purple800 },
	pink: { background: color.pink500, color: color.pink800 },
	orange: { background: color.orange500, color: color.orange800 },
	yellow: { background: color.yellow500, color: color.yellow800 },
	skyblue: { background: color.skyblue500, color: color.skyblue800 },
};

export const sizeVariant = {
	small: { width: 40, height: 40 },
	medium: { width: 48, height: 48 },
};

export const wrapper = recipe({
	base: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: fontSize['md'],
		fontWeight: fontWeight['semibold'],
		lineHeight: lineHeights['sm'],
		borderRadius: borderRadius['circle'],
	},
	variants: {
		color: colorVariant,
		size: sizeVariant,
	},
	defaultVariants: {
		color: 'purple',
		size: 'small',
	},
});

export type ProfileColor = NonNullable<RecipeVariants<typeof wrapper>>['color'];
export type ProfileSize = NonNullable<RecipeVariants<typeof wrapper>>['size'];
