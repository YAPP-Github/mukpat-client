import { style } from '@vanilla-extract/css';

import {
  wrapper as cardWrapper,
  header as cardHeader,
  titleStyle as cardTitleStyle,
  body as cardBody,
  footer as cardFooter,
} from '@/app/home/components/BoardCard/BoardCard.css';

export const wrapper = style([
  cardWrapper,
  {
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

export const titleStyle = style([cardTitleStyle]);

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

export const footer = style([cardFooter]);
