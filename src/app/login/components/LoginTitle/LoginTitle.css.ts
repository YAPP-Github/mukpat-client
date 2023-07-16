import { style } from '@vanilla-extract/css';
import { screenMQ } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

export const title = style({
  background: 'linear-gradient(90deg, #B0A4EE 0%, #738CF7 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginTop: '80px',
  ...fontVariant.heading2,
  '@media': {
    [screenMQ.m]: {
      ...fontVariant.title1,
      marginTop: '96px',
    },
  },
});
