import { keyframes, style } from '@vanilla-extract/css';

const fadeInAnimation = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

export const welcomeWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  animation: `${fadeInAnimation} 1s ease-in-out`,
  padding: '0 20px',
});

export const title = style({
  margin: '24px 0',
});
export const description = style({
  marginBottom: '56px',
});
