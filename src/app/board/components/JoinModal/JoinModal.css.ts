import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const modalHeader = style({
  display: 'flex',
  alignItems: 'center',
});

export const modalContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  textAlign: 'left',
  gap: space['2xl'],
});

export const buttonGroup = style({
  display: 'flex',
  gap: space['2xs'],
  alignItems: 'center',
});

export const lineBreak = style({
  wordBreak: 'break-all',
  whiteSpace: 'break-spaces',
});

export const bulletTitleBottomSpace = style({
  marginBottom: space['sm'],
});

export const bodyBottomSpace = style({
  marginBottom: space.lg,
});

export const checkBoxGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.md,
});
