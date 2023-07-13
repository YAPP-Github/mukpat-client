import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const dropdown = style({
  width: 'max-content',
  marginLeft: 'auto',
  marginBottom: space['4xl'],

  '@media': {
    [screenMQ.m]: {
      marginBottom: space.sm,
    },
  },
});

export const dropdownMenu = style({
  width: '14.75rem !important',
});
