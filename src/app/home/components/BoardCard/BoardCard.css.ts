import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';

const { space, borderRadius, color } = themeTokens;

export const wrapper = style({
  padding: space['3xl'],
  borderRadius: borderRadius.xl,
  border: `1px solid ${color.grey100}`,
  backgroundColor: color.white,
  width: '364px',
  height: '324px',
  position: 'relative',
  transitionProperty: 'box-shadow, transform',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-in-out',
  selectors: {
    '&:hover': {
      boxShadow: `0px 10px 15px -3px rgba(0, 0, 0, 0.05)`,
      transform: `translateY(-8px)`,
    },
  },
});

export const header = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: space.md,
});

export const chips = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.sm,
});

export const titleSpace = style({
  marginBottom: space.xl,
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.sm,
  position: 'relative',
  paddingBottom: space.xl,
  marginBottom: space.xl,

  selectors: {
    '&:after': {
      content: '',
      width: '100%',
      borderBottom: `1px solid ${color.grey200}`,
      position: 'absolute',
      bottom: 0,
    },
  },
});

export const bodyItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.sm,
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: space.lg,
});

export const participantsCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: space['2xs'],
});

export const participantsList = style({
  display: 'flex',
  alignItems: 'center',
  gap: space.md,
});
