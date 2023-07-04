import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space, zIndices, color } = themeTokens;

export const wrapper = style({
  position: 'fixed',
  left: space.none,
  bottom: space.none,
  right: space.none,
  display: 'flex',
  zIndex: zIndices.sticky,
  width: '100%',
  height: '82px',
  backgroundColor: color.white,
  flexDirection: 'row',
  padding: '8Px 20px 20px',
});
