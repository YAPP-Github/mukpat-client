import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { zIndices } = themeTokens;

export const loadingWrapper = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: zIndices.tooltip,
});
export const backgroundWrapper = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'rgba(255, 255, 255, 0.5)',
});
