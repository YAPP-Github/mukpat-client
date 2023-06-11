import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { calc } from '@vanilla-extract/css-utils';

const { space, color } = themeTokens;

export const wrapper = recipe({
	base: {
		position: 'fixed',
		top: 0,
		padding: `0 ${calc.add(space['3xl'], space['2xs'])}`,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		height: 'max-content',
	},
	variants: {
		scrolled: {
			true: {
				backgroundColor: 'rgba(255, 255, 255, 0.7)',
				borderBottom: `1px solid ${color.grey100}`,
				backdropFilter: 'blur(20px)',
			},
			false: {
				backgroundColor: 'transparent',
			},
		},
	},
	defaultVariants: {
		scrolled: false,
	},
});

export const actions = style({
	display: 'flex',
	alignItems: 'center',
	padding: `${space.lg} 0`,
	paddingRight: 0,
	gap: space.lg,
	flexShrink: 0,
});

export const dropdownToggle = style({
	display: 'flex',
	alignItems: 'center',
	gap: '4px',
});
