import { fontVariant } from '@/styles/variant.css';
import { style, globalStyle } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
const { color } = themeTokens;

export const requiredFields = style({
  ...fontVariant.label5,
  color: color.red500,
  height: '16px',
  width: '400px',
  marginTop: '12px',
});
export const button = style({
  marginTop: '64px',
});
export const buttonWrapper = style({
  marginTop: '20px',
});
export const inputArea = style({
  display: 'flex',
  position: 'relative',
});
globalStyle(`${inputArea} > span`, {
  ...fontVariant.body2,
  position: 'absolute',
  color: color.primary,
  top: '14px',
  right: '74px',
});
globalStyle(`${inputArea} > div`, {
  width: '200px',
  marginRight: '12px',
});
export const input = style({
  width: '100%',
});
