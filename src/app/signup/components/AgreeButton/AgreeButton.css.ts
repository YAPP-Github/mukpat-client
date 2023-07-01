import { style, globalStyle } from '@vanilla-extract/css';

export const agreeWrapper = style({
  display: 'flex',
  alignItems: 'center',
  margin: '0',
});
export const agreeText = style({
  textDecoration: 'underline',
});
globalStyle(`${agreeWrapper} > button`, {
  padding: '6px',
  marginRight: '4px',
});
