import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const wrapper = style({
  position: 'sticky',
  top: '7.25rem',
  height: 'max-content',
});

export const counterText = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.sm,
  paddingLeft: space.sm,
  marginBottom: space.md,
});

export const listBottomSpace = style({
  marginBottom: space['2xl'],
});

export const dropdown = style({
  width: 'max-content',
  marginLeft: 'auto',
  marginBottom: space['4xl'],
});

export const dropdownMenu = style({
  width: '14.75rem !important',
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.md,
});
