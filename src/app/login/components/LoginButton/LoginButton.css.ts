import { fontVariant } from '@/styles/variant.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { color, space } = themeTokens;
export const buttonWrapper = style({
  width: 'inherit',
  marginTop: space.xl,
  '@media': {
    [screenMQ.m]: {
      width: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
});
export const signup = style({
  '@media': {
    [screenMQ.m]: {
      ...fontVariant.label3,
      padding: `${space.md} ${space.lg}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
export const persistentButton = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: sizeProp(36),
  '@media': {
    [screenMQ.m]: {
      marginBottom: space.none,
      flexDirection: 'row',
    },
  },
});
export const buttonList = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});
export const login = style({
  marginBottom: space.md,
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
export const requiredFields = style({
  ...fontVariant.label5,
  color: color.red500,
  height: '16px',
  '@media': {
    [screenMQ.m]: {
      display: 'none',
    },
  },
});
globalStyle(`${persistentButton} > button`, {
  padding: space.xs,
  marginRight: space['2xs'],
});
