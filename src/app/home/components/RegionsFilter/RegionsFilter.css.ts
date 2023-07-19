import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';
import { FILTER_POS } from '@/app/home/constants';
import { fontVariant } from '@/styles/variant.css';

const { color, space, zIndices } = themeTokens;

export const background = recipe({
  base: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: `${space.xl} 0`,
    marginBottom: space.xl,
    '@media': {
      [screenMQ.m]: {
        padding: `${space.sm} 0`,
        marginBottom: space['sm'],
      },
    },
  },
  variants: {
    isSticky: {
      true: {
        position: 'sticky',
        width: '100%',
        zIndex: zIndices.above,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderBottom: `1px solid ${color.grey100}`,
        backdropFilter: 'blur(20px)',
        transition: 'top 0.3s ease-in-out, background-color 0.3s ease-in-out',
      },
    },
    isScrollDown: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        isSticky: true,
        isScrollDown: true,
      },
      style: {
        top: 0,
      },
    },
    {
      variants: {
        isSticky: true,
        isScrollDown: false,
      },
      style: {
        top: sizeProp(FILTER_POS.DESKTOP),
        '@media': {
          [screenMQ.m]: {
            top: sizeProp(FILTER_POS.MOBILE),
          },
        },
      },
    },
  ],
  defaultVariants: {
    isSticky: false,
    isScrollDown: false,
  },
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: sizeProp('400px'),
  gap: space.sm,

  '@media': {
    [screenMQ.m]: {
      width: sizeProp('288px'),
    },
  },
});

export const dropdown = style({
  width: '100%',
});

export const itemText = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ...fontVariant.label2,

  '@media': {
    [screenMQ.m]: {
      ...fontVariant.label3,
    },
  },
});

export const itemCountText = recipe({
  variants: {
    active: {
      true: {
        color: color.primary500,
      },
      false: {
        color: color.hint,
      },
    },
    selected: {
      true: {
        display: 'none',
      },
    },
  },
});
