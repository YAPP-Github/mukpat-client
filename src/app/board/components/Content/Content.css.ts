import { screenMQ } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';
import { style } from '@vanilla-extract/css';

export const contentPadding = style({
  paddingTop: sizeProp('116px'),

  '@media': {
    [screenMQ.m]: {
      paddingTop: sizeProp('72px'),
    },
  },
});
