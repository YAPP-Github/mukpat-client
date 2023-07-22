import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { space } = themeTokens;
export const wrapper = style({
  width: '674px',
  marginTop: '7.25rem',
  marginBottom: space['7xl'],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.25rem',
  '@media': {
    [screenMQ.m]: {
      width: '100%',
      maxWidth: sizeProp(400),
      marginTop: '7.25rem',
      marginBottom: space.xl,
      padding: `${space.lg} ${space.xl} 0 ${space.xl}`,
    },
  },
});

export const rowSection = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: space.md,
});
