import { keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';

const { color } = themeTokens;

const shimmer = keyframes({
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const wrapper = recipe({
  base: {
    position: 'relative',
    overflow: 'hidden',
    selectors: {
      '&:after': {
        content: '',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        transform: 'translateX(-100%)',
        backgroundImage:
          'linear-gradient(90deg, rgba(255,255,255, 0) 0%, rgba(255,255,255, 0.2) 20%, rgba(255,255,255, 0.5) 60%, rgba(255,255,255, 0) 100%);',
        animationName: shimmer,
        animationDuration: '2s',
        animationIterationCount: 'infinite',
      },
    },
  },
  variants: {
    radius: {
      sm: {
        borderRadius: '0.25rem',
      },
      md: {
        borderRadius: '1rem',
      },
      circle: {
        borderRadius: '50%',
      },
    },
    color: {
      light: {
        background: color.grey50,
      },
      dark: {
        background: color.grey200,
      },
    },
  },
  defaultVariants: {
    radius: 'sm',
    color: 'dark',
  },
});

type WrapperVariant = RecipeVariants<typeof wrapper>;
export type Radius = NonNullable<WrapperVariant>['radius'];
export type Color = NonNullable<WrapperVariant>['color'];
