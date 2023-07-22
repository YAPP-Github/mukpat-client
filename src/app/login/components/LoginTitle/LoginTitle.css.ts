import { style } from '@vanilla-extract/css';
import { screenMQ } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

export const title = style({
  background: 'linear-gradient(90deg, #B0A4EE 0%, #738CF7 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginTop: sizeProp(80),
  '@media': {
    [screenMQ.m]: {
      marginTop: '96px',
    },
  },
});
