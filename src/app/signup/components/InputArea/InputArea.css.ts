import { style, globalStyle } from '@vanilla-extract/css';
export const inputWrapper = style({
  width: '100%',
});
globalStyle(`${inputWrapper} > div`, {
  justifyContent: 'normal',
});
export const input = style({
  width: '100%',
});
