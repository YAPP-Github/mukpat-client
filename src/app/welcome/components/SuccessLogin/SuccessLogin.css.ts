import { keyframes, style } from '@vanilla-extract/css';
import { screenMQ } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const fadeInAnimation = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

export const welcomeWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  animation: `${fadeInAnimation} 1s ease-in-out`,
});

export const title = style({
  margin: '24px 0',
  ...fontVariant.heading2,
  '@media': {
    [screenMQ.m]: {
      ...fontVariant.title1,
    },
  },
});
export const description = style({
  marginBottom: '56px',
  ...fontVariant.body2,
  '@media': {
    [screenMQ.m]: {
      margin: '0',
    },
  },
});
export const login = style({
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
