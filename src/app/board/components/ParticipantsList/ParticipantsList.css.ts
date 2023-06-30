import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space, color, borderRadius } = themeTokens;

export const list = style({
  maxHeight: '40rem',
  overflowY: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      width: '12px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: borderRadius.pill,
      border: `4px solid rgba(0,0,0,0)`,
      backgroundClip: 'padding-box',
      backgroundColor: color.grey300,
    },
  },
});

export const listItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: space.sm,
});

export const participantProfile = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.md,
});

export const participantProfileText = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space['3xs'],
});
