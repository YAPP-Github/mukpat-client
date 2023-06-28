import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2.25rem',
});

export const headerText = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.md,
});

export const headerMenu = style({
  width: '14.75rem',
});
