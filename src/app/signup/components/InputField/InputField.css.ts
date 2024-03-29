import { globalStyle, style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
const { space } = themeTokens;
import { sizeProp } from '@/utils/sizeProp';
export const wrapper = style({
  margin: `${space['6xl']} 0 ${space['xl']} 0`,
  '@media': {
    [screenMQ.m]: {
      margin: `${space['5xl']} 0 0 0`,
    },
  },
});
export const form = style({});
globalStyle(`${form} > div`, {
  marginBottom: space['md'],
  width: sizeProp(400),
  '@media': {
    [screenMQ.m]: {
      marginBottom: space['md'],
      width: sizeProp(335),
      justifyContent: 'normal',
    },
  },
});
