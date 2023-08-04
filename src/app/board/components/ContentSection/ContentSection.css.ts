import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';
import { sizeProp } from '@/utils/sizeProp';

const { space, color, borderRadius } = themeTokens;

export const headerText = style({
  marginBottom: sizeProp('36px'),
  ...fontVariant.heading1,

  '@media': {
    [screenMQ.m]: {
      ...fontVariant.title1,
      marginBottom: space['3xl'],
    },
  },
});

export const statusText = recipe({
  base: {
    marginRight: space.md,
  },
  variants: {
    active: {
      true: {
        color: color.primary500,
      },
      false: {
        color: color.disable,
      },
    },
  },
});

export const infoBanner = style({
  width: '100%',
  padding: space.xl,
  backgroundColor: color.grey50,
  border: `1px solid ${color.grey100}`,
  borderRadius: borderRadius.xl,
  display: 'flex',
  flexDirection: 'column',
  gap: space.lg,
});

export const infoBannerItem = style({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '140px 1fr',
});

export const contentWrapper = style({
  ...fontVariant.body2,
  wordBreak: 'break-all',
  whiteSpace: 'break-spaces',
  marginTop: space['3xl'],
});

export const childrenWrapper = style({
  '@media': {
    [screenMQ.m]: {
      marginTop: space['3xl'],
      marginBottom: space['3xl'],
    },
  },
});

export const footer = style({
  marginTop: '7.5rem',
  borderTop: `1px solid ${color.grey200}`,
  paddingTop: space.sm,
});

export const footerText = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.lg,
  marginBottom: space.lg,
});

export const footerButtons = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const disabledLink = recipe({
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      },
      false: {},
    },
  },
});
