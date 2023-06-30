import { fontVariant } from '@/styles/variant.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
const { color } = themeTokens;
export const buttonWrapper = style({
  width: '400px',
});
export const persistentButton = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '36px',
});
export const loginButton = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});
export const requiredFields = style({
  ...fontVariant.label5,
  color: color.red500,
  height: '16px',
  width: '400px',
});

globalStyle(`${persistentButton} > button`, {
  padding: '6px',
  marginRight: '4px',
});
globalStyle(`${loginButton} > button`, {
  marginBottom: '12px',
  alignItems: 'center',
});
