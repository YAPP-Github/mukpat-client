import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const modalContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  textAlign: 'left',
  gap: space['2xl'],
});
