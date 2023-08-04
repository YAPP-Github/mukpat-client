import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';
import { fontVariant } from '@/styles/variant.css';

const { space, borderRadius, color } = themeTokens;

export const wrapper = recipe({
  base: {
    padding: space['3xl'],
    borderRadius: borderRadius.xl,
    border: `1px solid ${color.grey200}`,
    width: sizeProp('364px'),
    position: 'relative',
    transitionProperty: 'box-shadow, transform',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease-in-out',
    selectors: {
      '&:hover': {
        boxShadow: `0px 10px 15px -3px rgba(0, 0, 0, 0.05)`,
        transform: `translateY(-8px)`,
      },
    },

    '@media': {
      [screenMQ.m]: {
        width: sizeProp('312px'),
        padding: space.xl,
        selectors: {
          '&:hover': {
            boxShadow: 'none',
            transform: 'none',
          },
        },
      },
    },
  },
  variants: {
    isRecruiting: {
      true: {
        backgroundColor: color.white,
      },
      false: {
        backgroundColor: color.grey100,
      },
    },
  },
  defaultVariants: {
    isRecruiting: true,
  },
});

export const header = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: space.md,
});

export const chips = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.sm,
});

export const timeText = style({
  ...fontVariant.body2,
  color: color.sub,

  '@media': {
    [screenMQ.m]: {
      ...fontVariant.body3,
    },
  },
});

export const titleStyle = style({
  ...fontVariant.title1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginBottom: space.xl,

  '@media': {
    [screenMQ.m]: {
      ...fontVariant.title3,
    },
  },
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.sm,
  position: 'relative',
  paddingBottom: space.xl,
  marginBottom: space.xl,

  selectors: {
    '&:after': {
      content: '',
      width: '100%',
      borderBottom: `1px solid ${color.grey200}`,
      position: 'absolute',
      bottom: 0,
    },
  },

  '@media': {
    [screenMQ.m]: {
      paddingBottom: space.lg,
      marginBottom: space.lg,
    },
  },
});

export const bodyItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.sm,
});

export const bodyItemText = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.lg,
});

export const participantsCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: space['2xs'],
});

export const participantsList = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.md,

  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
