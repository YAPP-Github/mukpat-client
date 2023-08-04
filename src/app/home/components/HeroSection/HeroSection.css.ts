import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';
import { fontVariant } from '@/styles/variant.css';

const { color, space, borderRadius } = themeTokens;

export const section = recipe({
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #A3B4FF -99.27%, #FFFFFF 44.33%)',
  },
  variants: {
    isLogin: {
      true: {
        paddingTop: space['7xl'],
        paddingBottom: '0',
        background: color.grey50,

        '@media': {
          [screenMQ.m]: {
            paddingTop: sizeProp('56px'),
          },
        },
      },
      false: {
        paddingTop: sizeProp('160px'),
        paddingBottom: space['6xl'],
        '@media': {
          [screenMQ.m]: {
            paddingTop: sizeProp('88px'),
            paddingBottom: space['4xl'],
          },
        },
      },
    },
  },
  defaultVariants: {
    isLogin: false,
  },
});

export const samsungLogo = style({
  width: sizeProp('160px'),
  height: sizeProp('36px'),
  marginBottom: space.md,

  '@media': {
    [screenMQ.m]: {
      width: sizeProp('70px'),
      height: sizeProp('16px'),
      marginBottom: space.sm,
    },
  },
});

export const title = style({
  textAlign: 'center',
  marginBottom: space['xl'],
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});

export const mobileTitle = style({
  display: 'none',
  textAlign: 'center',
  marginBottom: space['xl'],
  '@media': {
    [screenMQ.m]: {
      display: 'block',
    },
  },
});

export const subTitle = style({
  ...fontVariant.body1,
  textAlign: 'center',
  marginBottom: space['6xl'],
  color: color.grey600,

  '@media': {
    [screenMQ.m]: {
      ...fontVariant.label3,
      marginBottom: 0,
    },
  },
});

export const button = style({
  width: 'max-content !important',
  padding: `${space.lg} ${space.xl}`,
  borderRadius: borderRadius.lg,

  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
