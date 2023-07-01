import { style, globalStyle } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { color } = themeTokens;

export const mapButton = style({
  display: 'flex',
  padding: '16px',
  height: '56px',
  alignItems: 'center',
  backgroundColor: '#FAFAFB',
  borderRadius: '14px',
  border: `1px solid ${color.grey100}`,
});
globalStyle(`${mapButton} > span`, {
  ...fontVariant.body2,
  color: color.primary,
  marginLeft: '8px',
});
