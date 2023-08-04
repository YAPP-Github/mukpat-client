import { globalStyle, style } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';
import { themeTokens } from '@/styles/theme.css';

export const counterWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: themeTokens.space.sm,
});

globalStyle('input', {
  border: 'none',
  outline: 'none',
});

globalStyle('input[type="number"]', {
  ...fontVariant.body2,
  width: 'min-content',
  textAlign: 'center',
  outline: 'none',
});

globalStyle(
  `input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-textfield-decoration-container`,
  {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
  },
);
