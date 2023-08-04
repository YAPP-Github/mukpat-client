import { style } from '@vanilla-extract/css';
import { screenMQ } from '@/styles/theme.css';

export const logo = style({
  width: '5rem',
  height: '5rem',

  '@media': {
    [screenMQ.m]: {
      width: '3rem',
      height: '3rem',
    },
  },
});
