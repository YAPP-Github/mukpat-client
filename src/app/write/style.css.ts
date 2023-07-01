import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;
export const wrapper = style({
  width: '674px',
  margin: '7.25rem auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  gap: '2.25rem',
});

export const rowSection = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: space.md,
});
