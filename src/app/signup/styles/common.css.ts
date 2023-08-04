import { keyframes, style } from '@vanilla-extract/css';
import { screenMQ } from '@/styles/theme.css';
const fadeInAnimation = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});
export const wrapper = style({
  animation: `${fadeInAnimation} 0.9s ease-in-out`,
  width: '400px',
  maxWidth: '400px',
  '@media': {
    [screenMQ.m]: {
      marginBottom: '82px',
      width: '100%',
      padding: '0 20px',
    },
  },
});
