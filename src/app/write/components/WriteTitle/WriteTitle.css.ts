import { screenMQ, themeTokens } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const { space } = themeTokens;

export const title = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: space.md,
  '@media': {
    [screenMQ.m]: {
      gap: space.sm,
    },
  },
});
