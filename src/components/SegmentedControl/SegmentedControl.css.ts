import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { color, space, borderRadius, zIndices } = themeTokens;

const wrapper = style({
	width: 'max-content',
	display: 'flex',
	alignItems: 'center',
	padding: space['2xs'],
	gap: space['3xs'],
	backgroundColor: color.grey200,
	borderRadius: borderRadius.md,
	overflow: 'hidden',
});

const item = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: `${space['md']} ${space['3xl']}`,
	position: 'relative',
	cursor: 'pointer',
});

const itemText = recipe({
	base: {
		...fontVariant.body2,
		zIndex: zIndices.docked,
		transition: 'color 0.2s ease-in-out',
	},
	variants: {
		selected: {
			true: {
				color: color.primary,
			},
			false: {
				color: color.hint,
			},
		},
	},
	defaultVariants: {
		selected: false,
	},
});

const itemHighlight = style({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: color.white,
	borderRadius: borderRadius.md,
});

export { wrapper, item, itemText, itemHighlight };
export type Selected = NonNullable<RecipeVariants<typeof itemText>>['selected'];
