import { screenMQ } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
});

export const row = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '1fr 3fr',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '16px',
  '@media': {
    [screenMQ.m]: {
      gridAutoFlow: 'row',
      alignItems: 'flex-start',
      gap: '1rem',
    },
  },
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '56px',
});
