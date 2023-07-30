import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  textAlign: 'left',
  gap: space['2xl'],
  padding: `0 ${space.xl}`,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space['2xl'],
});

export const footer = style({
  paddingBottom: space.xl,
});

export const footerButton = style({
  width: '100%',
});
