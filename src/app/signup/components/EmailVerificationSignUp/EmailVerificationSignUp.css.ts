import { fontVariant } from '@/styles/variant.css';
import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
const { color } = themeTokens;

export const requiredFields = style({
  ...fontVariant.label5,
  color: color.red500,
  height: '16px',
  width: '400px',
  marginTop: '2px',
});
export const button = style({
  marginTop: '24px',
});
export const description = style({
  color: color.primary,
  width: '347px',
  marginTop: '24px',
  marginBottom: '-40px',
});
