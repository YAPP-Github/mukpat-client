import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';

const { color, borderRadius } = themeTokens;

export const buttonWrapper = recipe({
  base: {
    border: 'none',
    color: color.white,
    ':disabled': {
      opacity: '0.2',
    },
  },
  variants: {
    color: {
      primary: {
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
      enabled: {
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
      none: {
        backgroundColor: 'transparent',
        color: color.secondary,
        selectors: {
          '&:hover:not(:disabled)': {
            background: 'rgba(28, 26, 66, 0.04)',
          },
          '&:active:not(:disabled)': {
            background: 'rgba(28, 26, 66, 0.1);',
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
      xlarge: {
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
        width: '140px',
        padding: '14px',
      },
      micro: {
        ...fontVariant.label3,
        borderRadius: borderRadius.sm,
        padding: '12px 16px',
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
