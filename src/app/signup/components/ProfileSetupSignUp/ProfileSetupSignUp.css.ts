import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';
const { color } = themeTokens;

export const button = style({
  marginTop: '60px',
});
export const category = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
export const requiredFields = style({
  ...fontVariant.label5,
  color: color.red500,
  height: '16px',
  width: '400px',
  marginTop: '2px',
});

export const inputMargin = style({
  marginLeft: '12px',
});
