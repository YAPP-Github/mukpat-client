import { fontVariant } from '@/styles/variant.css';
import { style, globalStyle } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
const { color, space } = themeTokens;

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
  justifyContent: 'space-between',
  alignItems: 'center',
});
globalStyle(`${inputArea} > span`, {
  ...fontVariant.body2,
  color: color.primary,
  // marginLeft: '12px',
  margin: '0 20px 0 12px',
  paddingBottom: '32px',
});
globalStyle(`${inputArea} > div`, {
  // width: '200px',
});
export const input = style({
  width: '100%',
});
