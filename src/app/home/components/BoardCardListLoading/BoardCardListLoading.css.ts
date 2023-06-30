import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import {
  wrapper as cardWrapper,
  header as cardHeader,
  titleStyle as cardTitleStyle,
  body as cardBody,
  footer as cardFooter,
} from '@/app/home/components/BoardCard/BoardCard.css';

const { color, space, borderRadius } = themeTokens;

const shimmer = keyframes({
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const skeleton = recipe({
  base: {
    backgroundColor: color.grey200,
    borderRadius: borderRadius['2xs'],
    position: 'relative',
    overflow: 'hidden',

    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateX(-100%)',
        backgroundImage:
          'linear-gradient(90deg, rgba(255,255,255, 0) 0%, rgba(255,255,255, 0.2) 20%, rgba(255,255,255, 0.5) 60%, rgba(255,255,255, 0) 100%);',
        animationName: shimmer,
        animationDuration: '2s',
        animationIterationCount: 'infinite',
      },
    },
  },
  variants: {
    width: {
      '2xs': {
        width: '2.5rem',
      },
      xs: { width: '4.625rem' },
      sm: {
        width: '5.25rem',
      },
      md: {
        width: '50%',
      },
      full: {
        width: '100%',
      },
    },
    height: {
      sm: {
        height: space.xl,
      },
      md: {
        height: space['2xl'],
      },
      lg: {
        height: space['4xl'],
      },
    },
  },
});

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
