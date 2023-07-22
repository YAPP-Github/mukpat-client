import { fontVariant } from '@/styles/variant.css';
import { style, globalStyle } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
const { color, space } = themeTokens;
import { sizeProp } from '@/utils/sizeProp';
export const requestWrapper = style({
  '@media': {
    [screenMQ.m]: {
      marginBottom: sizeProp(82),
    },
  },
});
export const requiredFields = style({
  ...fontVariant.label5,
  color: color.red500,
  height: space.lg,
  marginTop: space.md,
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
export const button = style({
  marginTop: space['6xl'],
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
export const buttonWrapper = style({
  marginTop: space.xl,
  width: '100%',
});
export const inputArea = style({
  display: 'flex',
  position: 'relative',
});
globalStyle(`${inputArea} > span`, {
  position: 'absolute',
  ...fontVariant.body2,
  color: color.primary,
  top: sizeProp(14),
  left: sizeProp(212),
});
globalStyle(`${inputArea} > div`, {
  width: sizeProp(200),
});
export const input = style({
  width: '100%',
});
