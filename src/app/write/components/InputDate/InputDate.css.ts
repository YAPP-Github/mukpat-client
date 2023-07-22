import { screenMQ } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const preventClick = style({
  '@media': {
    [screenMQ.m]: {
      pointerEvents: 'none',
    },
  },
});
