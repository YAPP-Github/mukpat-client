import { style } from '@vanilla-extract/css';

import {
  wrapper as cardWrapper,
  header as cardHeader,
  titleStyle as cardTitleStyle,
  body as cardBody,
  footer as cardFooter,
} from '@/app/home/components/BoardCard/BoardCard.css';
import { sizeProp } from '@/utils/sizeProp';
import { screenMQ } from '@/styles/theme.css';

export const wrapper = style([
  cardWrapper(),
  {
    border: '1px solid white',
    transition: 'none',
    selectors: {
      '&:hover': {
        transform: 'none',
        boxShadow: 'none',
      },
    },
  },
]);

export const header = style([cardHeader]);

export const headerLeft = style({
  width: sizeProp('74px'),
  height: sizeProp('28px'),

  '@media': {
    [screenMQ.m]: {
      width: sizeProp('56px'),
    },
  },
});

export const headerRight = style({
  width: sizeProp('40px'),
  height: sizeProp('28px'),

  '@media': {
    [screenMQ.m]: {
      width: sizeProp('32px'),
    },
  },
});

export const titleStyle = style([
  cardTitleStyle,
  {
    height: sizeProp('24px'),
    '@media': {
      [screenMQ.m]: {
        height: sizeProp('20px'),
      },
    },
  },
]);

export const body = style([
  cardBody,
  {
    selectors: {
      '&:after': {
        border: 'none',
      },
    },
  },
]);

export const bodyItem = style({
  height: sizeProp('24px'),

  '@media': {
    [screenMQ.m]: {
      height: sizeProp('20px'),
    },
  },
});

export const footer = style([cardFooter]);

export const footerParticipants = style({
  height: '40px',
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
