import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  marginTop: '64px',
  marginBottom: '20px',
});

export const form = style({});

globalStyle(`${form} > div`, {
  marginBottom: '12px',
});

globalStyle(`input`, {
  width: '400px',
});
