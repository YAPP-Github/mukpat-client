import { themeTokens } from '@/styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';
import { recipe } from '@vanilla-extract/recipes';
import { sizeProp } from '@/utils/sizeProp';
import { calc } from '@vanilla-extract/css-utils';
const { color, zIndices } = themeTokens;

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 20px 30px 20px',
});
globalStyle(`${titleWrapper} > div`, {
  ...fontVariant.title3,
  color: color.secondary,
});
globalStyle(`${titleWrapper} > button`, {
  marginRight: '-4px',
});
export const background = recipe({
  base: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    bottom: '0',
    background: color.black,
    opacity: '0.3',
    zIndex: zIndices.overlay,
  },
  variants: {
    open: {
      true: {},
      false: {
        display: 'none',
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});
export const wrap = recipe({
  base: {
    position: 'fixed',
    display: 'flex',
    bottom: '0',
    left: '0',
    width: '100%',
    background: color.white,
    zIndex: zIndices.modal,
    borderRadius: '14px 14px 0px 0px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: calc.subtract('100vh', sizeProp('180px')),
  },
  variants: {
    open: {
      true: {
        transform: 'translate3d(0, 0, 0)',
        transition: 'all 300ms',
      },
      false: {
        transform: 'translate3d(0, 100%, 0)',
        transition: 'all 300ms',
      },
    },
  },
  defaultVariants: {
    open: false,
  },
});
