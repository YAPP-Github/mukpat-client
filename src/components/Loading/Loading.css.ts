import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { zIndices, space } = themeTokens;

export const backgroundWrapper = style({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: space.none,
  left: space.none,
  background: 'rgba(255, 255, 255, 0.5)',
  zIndex: zIndices.tooltip,
});

export const loadingWrapper = style({
  position: 'absolute',
  top: space.none,
  left: space.none,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 280px',
  zIndex: zIndices.tooltip,
});
