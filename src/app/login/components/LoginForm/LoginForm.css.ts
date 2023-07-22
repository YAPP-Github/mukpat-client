import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { screenMQ } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { space } = themeTokens;

export const wrapper = style({
  marginTop: sizeProp(64),
  maxWidth: sizeProp(400),
  '@media': {
    [screenMQ.m]: {
      width: '100%',
      padding: `0 ${sizeProp(20)}`,
      margin: `${sizeProp(48)} 0 0 0`,
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
