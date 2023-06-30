import { keyframes, style } from '@vanilla-extract/css';
const fadeInAnimation = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});
export const wrapper = style({
  animation: `${fadeInAnimation} 0.9s ease-in-out`,
});
