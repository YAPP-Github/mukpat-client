import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const listGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: space['2xl'],
});
