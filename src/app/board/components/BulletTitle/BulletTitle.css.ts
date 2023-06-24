import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { themeTokens } from '@/styles/theme.css';

const { color, space, borderRadius } = themeTokens;

export const bulletTitle = style({
  position: 'relative',
  textAlign: 'left',
  marginLeft: space.md,
  '::before': {
    content: '',
    display: 'inline-block',
    marginRight: '8px',
    width: space['2xs'],
    height: space['2xs'],
    backgroundColor: color.sub,
    borderRadius: borderRadius.circle,
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: calc.negate(space.md),
    margin: 'auto 0',
  },
});
