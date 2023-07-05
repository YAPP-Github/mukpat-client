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
      left: space.none,
      bottom: space.none,
      right: space.none,
      zIndex: zIndices.sticky,
      width: '100%',
      backgroundColor: color.white,
      flexDirection: 'row',
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
