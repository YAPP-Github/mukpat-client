import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { screenMQ } from '@/styles/theme.css';

const { space } = themeTokens;

export const wrapper = style({
  marginTop: ' 64px',
  '@media': {
    [screenMQ.m]: {
      width: '100%',
      padding: '0 20px',
      margin: '48px 0 0 0',
    },
  },
});
export const input = style({
  maxWidth: '100%',
  '@media': {
    [screenMQ.m]: {
      maxWidth: '100%',
    },
  },
});
export const inputSection = style({
  marginBottom: space.md,
  justifyContent: 'normal',
});
