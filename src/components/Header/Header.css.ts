import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { themeTokens, screenMQ } from '@/styles/theme.css';
import { calc } from '@vanilla-extract/css-utils';
import { sizeProp } from '@/utils/sizeProp';

const { space, color, zIndices } = themeTokens;

export const wrapper = recipe({
  base: {
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'max-content',
    zIndex: zIndices.docked,
    padding: `0 ${calc.add(space['3xl'], space['2xs'])}`,

    '@media': {
      [screenMQ.m]: {
        padding: `${space['2xs']} ${space.md}`,
      },
    },
  },
  variants: {
    scrolled: {
      true: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderBottom: `1px solid ${color.grey100}`,
        backdropFilter: 'blur(20px)',
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
  },
  defaultVariants: {
    scrolled: false,
  },
});

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${space.lg} 0`,
  paddingRight: 0,
  gap: space.lg,
  flexShrink: 0,

  '@media': {
    [screenMQ.m]: {
      padding: 0,
      gap: sizeProp('6px'),
    },
  },
});

export const dropdownToggle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const actionButton = style({
  '@media': {
    [screenMQ.m]: {
      padding: `${space.sm} ${space.md}`,
    },
  },
});

export const pcActionButton = style({
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});

export const profileWrapper = style({
  width: '3rem',
  height: '3rem',
  '@media': {
    [screenMQ.m]: {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
});

export const feedbackAction = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  padding: `${space.md} ${space.lg}`,
  '@media': {
    [screenMQ.m]: {
      padding: `${space.sm} ${space.md}`,
    },
  },
});
