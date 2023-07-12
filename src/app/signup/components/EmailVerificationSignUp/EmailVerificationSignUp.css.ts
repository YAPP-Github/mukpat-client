import { fontVariant } from '@/styles/variant.css';
import { style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
const { color, space } = themeTokens;

export const requiredFields = style({
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
  ...fontVariant.label5,
  color: color.red500,
  marginTop: space['2xs'],
});
export const button = style({
  marginTop: space['2xl'],
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
export const sendEmail = style({
  '@media': {
    [screenMQ.m]: {
      position: 'absolute',
      width: '160px',
      left: '50%',
      bottom: '122px',
      transform: 'translate(-50%, 0)',
    },
  },
});

export const description = style({
  color: color.primary,
  ...fontVariant.body2,
  marginTop: space['2xl'],
  marginBottom: '-40px',
  '@media': {
    [screenMQ.m]: {
      ...fontVariant.body3,
      width: '100%',
      marginTop: space['5xl'],
    },
  },
});
