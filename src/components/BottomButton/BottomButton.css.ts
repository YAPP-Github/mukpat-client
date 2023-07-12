import { style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { space, zIndices, color } = themeTokens;

export const wrapper = style({
  display: 'none',
  '@media': {
    [screenMQ.m]: {
      display: 'inline-block',
      position: 'fixed',
      bottom: space.none,
      right: space.none,
      zIndex: zIndices.sticky,
      maxWidth: '400px',
      width: '100% !important',
      backgroundColor: color.white,
      flexDirection: 'row',
      left: '50%',
      transform: 'translate(-50%, 0)',
      padding: `${space.none} ${space.xl} ${space.xl}`,
    },
  },
});
export const error = style({
  marginTop: space.xl,
  display: 'block',
  color: color.red500,
  ...fontVariant.label3,
});

export const button = style({
  marginTop: space.sm,
});
