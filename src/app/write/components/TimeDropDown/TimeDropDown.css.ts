import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const wrapper = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: '1fr 1fr',
  gap: space.md,
});
