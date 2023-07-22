import { style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
const { space } = themeTokens;

export const dropdownWrapper = style({
  width: '100%',
  paddingBottom: space.lg,
  '@media': {
    [screenMQ.m]: {
      marginBottom: space.md,
    },
  },
});
export const dropdown = style({
  margin: `${space.sm} 0 ${space.sm} 0`,
});
