import { style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
const { space } = themeTokens;

export const selectorWrapper = style({
  width: '100%',
  marginRight: space.md,
  paddingBottom: space.lg,
  '@media': {
    [screenMQ.m]: {
      marginRight: space.none,
      marginBottom: space.md,
    },
  },
});
export const selector = style({
  margin: `${space.sm} 0 ${space.sm} 0`,
});
