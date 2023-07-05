import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';

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
        paddingTop: '5rem',
        paddingBottom: '0',
        background: color.grey50,
      },
      false: {
        paddingTop: '9rem', // 144px
        paddingBottom: '4rem',
      },
    },
  },
  defaultVariants: {
    isLogin: false,
  },
});

export const contentWrapper = style({});

export const title = style({
  textAlign: 'center',
  marginBottom: space['2xl'],
});

export const subTitle = style({
  textAlign: 'center',
  marginBottom: space['7xl'],
});

export const button = style({
  width: 'max-content !important',
  padding: `${space.lg} ${space.xl}`,
  borderRadius: borderRadius.lg,
});
