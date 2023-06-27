import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;
export const formWrapper = style({
  width: '100%',
  display: 'grid',
  gridAutoFlow: 'row',
  gap: '3.5rem',
});

export const inputDivider = style({
  display: 'inherit',
  gap: space.md,
});
