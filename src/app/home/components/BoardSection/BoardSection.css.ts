import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { color, space } = themeTokens;

export const section = style({
  background: color.grey50,
  width: '100%',
  padding: `${sizeProp('66px')} 0`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media': {
    [screenMQ.m]: {
      padding: `${sizeProp('28px')} 0`,
    },
  },
});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: space['3xl'],
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});

export const listGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: space['2xl'],

  '@media': {
    [screenMQ.m]: {
      padding: `0 ${space['2xl']}`,
      justifyContent: 'center',
      gridTemplateColumns: '1fr',
    },
  },
});
