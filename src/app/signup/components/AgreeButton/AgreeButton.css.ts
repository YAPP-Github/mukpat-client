import { style, globalStyle } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
const { space } = themeTokens;

export const agreeWrapper = style({
  display: 'flex',
  alignItems: 'center',
  margin: space.none,
});
export const agreeText = style({
  textDecoration: 'underline',
});
globalStyle(`${agreeWrapper} > button`, {
  padding: space['xs'],
  marginRight: space['2xs'],
});
