import { style } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';
import { screenMQ, themeTokens } from '@/styles/theme.css';

const { space, color } = themeTokens;

export const openButton = style({
  ...fontVariant.label3,
  padding: `${space.md} ${space.xl}`,
  gap: space.sm,
  background: color.grey100,
  borderRadius: space.md,
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
});

export const modalContentWrapper = style({
  display: 'grid',
  gridAutoFlow: 'row',
  gap: '36px',
});

export const modalContent = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: themeTokens.space.sm,
  '@media': {
    [screenMQ.m]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      margin: space.xl,
    },
  },
});

export const birthText = style({
  ...fontVariant.body2,
  color: themeTokens.color.sub,
});
