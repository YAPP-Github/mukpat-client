import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { space } = themeTokens;

export const wrapper = style({
  display: 'grid',
  width: '56.25rem',
  gridTemplateColumns: '600px 274px',
  gap: space['2xl'],
  position: 'relative',
  paddingBottom: '7.5rem',

  '@media': {
    [screenMQ.m]: {
      display: 'flex',
      flexDirection: 'column',
      gap: space['3xl'],
      width: '100%',
      padding: `${space.xl} ${space.lg}`,
      marginBottom: sizeProp('82px'),
    },
  },
});
