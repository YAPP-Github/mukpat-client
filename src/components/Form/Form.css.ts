import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const formWrapper = style({
	position: 'relative',
	display: 'grid',
	width: 'inherit',
	gridAutoFlow: 'row',
	gap: space.lg,
});
