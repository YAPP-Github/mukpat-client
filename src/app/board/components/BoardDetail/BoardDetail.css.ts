import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space } = themeTokens;

export const wrapper = style({
  display: 'grid',
  width: '56.25rem',
  gridTemplateColumns: '600px 274px',
  gap: space['2xl'],
  position: 'relative',
  paddingBottom: '7.5rem',
});
