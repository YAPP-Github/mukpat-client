import { style } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';
import { themeTokens } from '@/styles/theme.css';

export const openButton = style({
  ...fontVariant.label3,
  padding: `${themeTokens.space.md} ${themeTokens.space.xl}`,
  gap: themeTokens.space.sm,
  background: themeTokens.color.grey100,
  borderRadius: themeTokens.space.md,
});

export const modalContentWrapper = style({
  display: 'grid',
  gridAutoFlow: 'row',
  gap: '36px',
});

export const modalContent = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: themeTokens.space.sm,
});

export const birthText = style({
  ...fontVariant.body2,
  color: themeTokens.color.sub,
});
