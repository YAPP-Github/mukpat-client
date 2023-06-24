import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { color, borderRadius } = themeTokens;

export const buttonWrapper = recipe({
  base: {
    border: 'none',
    ':disabled': {
      opacity: '0.2',
    },
  },
  variants: {
    color: {
      primary: {
        color: color.white,
        backgroundColor: color.primary500,
        selectors: {
          '&:hover:not(:disabled)': {
            background: color.primary600,
          },
          '&:active:not(:disabled)': {
            background: color.primary700,
          },
        },
      },
      secondary: {
        color: color.white,
        backgroundColor: color.red500,
        selectors: {
          '&:hover:not(:disabled)': {
            background: color.red600,
          },
          '&:active:not(:disabled)': {
            background: color.red700,
          },
        },
      },
      sub: {
        backgroundColor: color.grey100,
        color: color.secondary,
        selectors: {
          '&:hover:not(:disabled)': {
            background: color.grey200,
          },
          '&:active:not(:disabled)': {
            background: color.grey300,
          },
        },
      },
      text: {
        backgroundColor: 'transparent',
        color: color.secondary,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: color.grey100,
          },
          '&:active:not(:disabled)': {
            backgroundColor: color.grey200,
          },
        },
      },
      explain: {
        backgroundColor: color.grey600,
        color: color.white,
        ':hover': {
          background: color.grey700,
        },
      },
    },
    size: {
      xLarge: {
        ...fontVariant.label2,
        borderRadius: borderRadius.lg,
        width: '674px',
        padding: '16px',
      },
      large: {
        ...fontVariant.label2,
        borderRadius: borderRadius.lg,
        width: '400px',
        padding: '16px',
      },
      medium: {
        ...fontVariant.label3,
        borderRadius: borderRadius.lg,
        width: '274px',
        padding: '14px',
      },
      small: {
        ...fontVariant.label3,
        borderRadius: borderRadius.lg,
        width: '288px',
        padding: '14px',
      },
      micro: {
        ...fontVariant.label3,
        borderRadius: borderRadius.lg,
        width: '140px',
        padding: '14px',
      },
      paddingSmall: {
        ...fontVariant.label3,
        borderRadius: borderRadius.sm,
        padding: '12px 16px',
      },
      paddingMedium: {
        ...fontVariant.body2,
        borderRadius: borderRadius.sm,
        padding: '12px 20px',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'large',
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonWrapper>;
export type Color = NonNullable<ButtonVariants>['color'];
export type Size = NonNullable<ButtonVariants>['size'];
