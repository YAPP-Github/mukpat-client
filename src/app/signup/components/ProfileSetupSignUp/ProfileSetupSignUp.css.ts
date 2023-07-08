import { style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';
const { color, space } = themeTokens;

export const profile = style({
  '@media': {
    [screenMQ.m]: {
      marginBottom: '82px',
    },
  },
});
export const button = style({
  marginTop: '36px',
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
export const category = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@media': {
    [screenMQ.m]: {
      flexDirection: 'column',
    },
  },
});
export const requiredFields = style({
  ...fontVariant.label5,
  color: color.red500,
  marginTop: space['3xs'],
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});

export const inputMargin = style({
  marginLeft: space.md,
});
