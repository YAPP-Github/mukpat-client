import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;
export const wrapper = style({
  width: '674px',
  margin: '7.25rem auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.25rem',
  '@media': {
    [screenMQ.m]: {
      width: '100vw',
      padding: `${space.lg} ${space.xl}`,
    },
  },
});

export const rowSection = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: space.md,
});
