import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { screenMQ, themeTokens } from '@/styles/theme.css';
import { sizeProp } from '@/utils/sizeProp';

const { color, space, zIndices } = themeTokens;

export const background = recipe({
  base: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: space['4xl'],
    '@media': {
      [screenMQ.m]: {
        marginBottom: space['lg'],
      },
    },
  },
  variants: {
    isSticky: {
      true: {
        position: 'sticky',
        top: sizeProp('81px'),
        width: '100%',
        zIndex: zIndices.above,
        padding: `${space.sm} 0`,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderBottom: `1px solid ${color.grey100}`,
        backdropFilter: 'blur(20px)',

        '@media': {
          [screenMQ.m]: {
            top: sizeProp('57px'),
          },
        },
      },
    },
  },
  defaultVariants: {
    isSticky: false,
  },
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: sizeProp('400px'),
  gap: space.sm,

  '@media': {
    [screenMQ.m]: {
      width: sizeProp('288px'),
    },
  },
});

export const dropdown = style({
  width: '100%',
});
