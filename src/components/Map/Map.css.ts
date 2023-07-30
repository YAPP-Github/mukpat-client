import { style, globalStyle } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const { color, borderRadius, space, zIndices } = themeTokens;

export const mapContainer = style({
  position: 'fixed',
  top: space.none,
  left: space.none,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 280px',
  zIndex: zIndices.overlay,
  '@media': {
    [screenMQ.m]: {
      padding: '0',
    },
  },
});
export const backgroundWrapper = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: color.black,
  opacity: '0.3',
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
export const mapSearchContainer = style({
  position: 'relative',
  width: '100%',
  height: '640px',
  display: 'flex',
  minWidth: '292px',
  maxWidth: '880px',
  background: color.white,
  boxShadow: '0px 14px 28px -7px rgba(0, 0, 0, 0.04)',
  borderRadius: borderRadius.xl,
  '@media': {
    [screenMQ.m]: {
      height: '100%',
      maxWidth: '100%',
      flexDirection: 'column',
    },
  },
});
export const searchWrapper = style({
  width: '292px',
  minWidth: '230px',
});
export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  margin: '0 12px',
});
globalStyle(`${buttonWrapper} > button`, {
  margin: '16px 0 20px',
});
export const mapWrapper = recipe({
  base: {
    width: '67%',
    height: '100%',
    borderRadius: '0 20px 20px 0',
    minWidth: '150px',
    '@media': {
      [screenMQ.m]: {
        height: '100%',
        width: '100%',
        borderRadius: '0',
      },
    },
  },
  variants: {
    display: {
      true: {
        '@media': {
          [screenMQ.m]: {
            display: 'unset',
            height: '100%',
          },
        },
      },
      false: {
        '@media': {
          [screenMQ.m]: {
            display: 'none',
            height: '100%',
          },
        },
      },
    },
  },
});
// export const mapWrapper = style({
//   width: '67%',
//   height: '100%',
//   borderRadius: '0 20px 20px 0',
//   minWidth: '150px',
//   '@media': {
//     [screenMQ.m]: {
//       height: '100%',
//       width: '100%',
//       borderRadius: '0',
//     },
//   },
// });

export const searchformWrapper = style({
  position: 'relative',
  '@media': {
    [screenMQ.m]: {
      display: 'flex',
      margin: '16px 20px 8px',
    },
  },
});
export const searchButton = style({
  position: 'absolute',
  top: '10px',
  right: '10px',
});
export const inputText = style({
  ...fontVariant.body2,
  width: '100%',
  minWidth: '100px',
  border: 'none',
  color: color.primary,
  height: '56px',
  borderRadius: borderRadius.lg,
  background: color.grey100,
  paddingLeft: '16px',
  paddingRight: '50px',
  selectors: {
    '&:focus': {
      outline: 'none',
      border: '1px solid #5568F9',
    },
    '&:not(:focus)': {
      border: 'transparent',
    },
  },
});
globalStyle(`${searchformWrapper} > form`, {
  position: 'relative',
  margin: '12px 16px',
  display: 'flex',
  '@media': {
    [screenMQ.m]: {
      margin: '0 0 0 8px',
      width: '100%',
    },
  },
});

export const searchinfoWrapper = recipe({
  base: {
    height: '480px',
    overflowY: 'auto',
    borderBottom: '1px solid #E5E8EB',
    '@media': {
      [screenMQ.m]: {
        width: '100%',
        height: '100%',
      },
    },
  },
  variants: {
    display: {
      true: {
        '@media': {
          [screenMQ.m]: {
            display: 'unset',
            height: '100%',
          },
        },
      },
      false: {
        '@media': {
          [screenMQ.m]: {
            display: 'none',
            height: '100%',
          },
        },
      },
    },
    marker: {
      true: {
        '@media': {
          [screenMQ.m]: {
            display: 'unset',
            height: '90px !important',
            overflow: 'hidden',
          },
        },
      },
      false: {},
    },
  },
});
export const noSearchInfoWrapper = recipe({
  base: {
    ...fontVariant.body2,
    height: '480px',
    color: color.hint,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '1px solid #E5E8EB',
    textAlign: 'center',
    '@media': {
      [screenMQ.m]: {
        height: '100%',
        width: '100%',
      },
    },
  },
  variants: {
    display: {
      true: {},
      false: {
        '@media': {
          [screenMQ.m]: {
            display: 'none',
            height: '100%',
          },
        },
      },
    },
  },
});

export const searchList = style({
  position: 'relative',
  listStyleType: 'none',
  display: 'flex',
  padding: '8px 20px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  height: '66px',
  selectors: {
    '&:active': {
      background: 'rgba(28, 26, 66, 0.1)',
    },
    '&:focus': {
      background: 'rgba(28, 26, 66, 0.1)',
    },
    '&:hover': {
      background: 'rgba(28, 26, 66, 0.04)',
    },
  },
});

globalStyle(`${searchList} > div`, {
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});
globalStyle(`${searchList} > :nth-child(1)`, {
  ...fontVariant.label3,
  color: color.primary,
  marginBottom: space['2xs'],
});
globalStyle(`${searchList} > :nth-child(2)`, {
  ...fontVariant.body5,
  color: color.primary,
  marginBottom: space['3xs'],
});
globalStyle(`${searchList} > :nth-child(3)`, {
  ...fontVariant.body5,
  color: color.grey400,
});

export const showMap = style({
  position: 'absolute',
  top: '24px',
  right: '20px',
  color: color.primary,
  ...fontVariant.body5,
});
