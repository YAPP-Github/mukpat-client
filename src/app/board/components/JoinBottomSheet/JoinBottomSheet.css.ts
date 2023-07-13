import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  textAlign: 'left',
  gap: space['2xl'],
  padding: `0 ${space.xl}`,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
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

export const footer = style({
  paddingBottom: space.xl,
});
