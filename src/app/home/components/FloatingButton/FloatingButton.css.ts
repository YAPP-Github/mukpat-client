import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { space, borderRadius } = themeTokens;

export const buttonWrapper = style({
  position: 'fixed',
  bottom: space['3xl'],
  right: space['2xl'],
  width: `${sizeProp('48px')} !important`,
  height: `${sizeProp('48px')} !important`,
  borderRadius: `${borderRadius.circle} !important`,
  padding: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
