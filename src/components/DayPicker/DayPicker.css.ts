import { style, globalStyle } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { borderRadius, color, space } = themeTokens;

export const caption = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: space['2xs'],
});

export const captionButtons = style({
  display: 'flex',
  alignItems: 'center',
});

export const calendar = style({
  vars: {
    '--rdp-background-color': 'rgba(28, 26, 26, 0.04)',
  },
});

// head cell styling
globalStyle(`${calendar} .rdp-head_cell`, {
  ...fontVariant.label5,
  color: color.primary,
});

globalStyle(`${calendar} .rdp-head_cell:first-child`, {
  color: color.red500,
});

globalStyle(`${calendar} .rdp-head_cell:last-child`, {
  color: color.primary500,
});

// day cell styling
globalStyle(`${calendar} .rdp-day`, {
  ...fontVariant.body3,
  borderRadius: borderRadius.xs,
  color: color.secondary,
});

globalStyle(`${calendar} .today`, {
  backgroundColor: 'rgba(28, 26, 66, 0.1)',
});

globalStyle(`${calendar} .disabled`, {
  color: color.disable,
});

globalStyle(`${calendar} .selected`, {
  backgroundColor: `${color.primary500} !important`,
  color: color.white,
});
