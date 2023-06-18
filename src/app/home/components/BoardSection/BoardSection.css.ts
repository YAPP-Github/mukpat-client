import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { color, space } = themeTokens;

export const section = style({
  background: color.grey50,
  width: '100%',
  paddingTop: space['7xl'], // 80px
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  marginBottom: space['5xl'],
});
