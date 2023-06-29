import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const instructionText = style({
  wordBreak: 'break-all',
  whiteSpace: 'break-spaces',
});

export const buttonGroup = style({
  gap: space.sm,
});
