import { style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
const { space } = themeTokens;

export const button = style({
  marginTop: space['6xl'],
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
