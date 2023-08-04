import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const listGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: space['2xl'],

  '@media': {
    [screenMQ.m]: {
      padding: `0 ${space['2xl']}`,
      justifyContent: 'center',
      gridTemplateColumns: '1fr',
      gap: space['md'],
    },
  },
});

export const noBoard = style({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: space.lg,
});
