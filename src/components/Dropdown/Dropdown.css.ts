import { style } from '@vanilla-extract/css';
import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { sizeProp } from '@/utils/sizeProp';

const { color, space, borderRadius, zIndices } = themeTokens;

export const wrapper = style({
  position: 'relative',
});

export const buttonBase = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: color.grey50,
  cursor: 'pointer',
  border: `1px solid ${color.grey100}`,
  color: color.sub,
  padding: `0 ${space.lg}`,
});

export const buttonVariant = recipe({
  variants: {
    isError: {
      true: {
        borderColor: color.red500,
      },
    },
    size: {
      medium: {
        height: '3.5rem',
        borderRadius: borderRadius.md,
      },
      small: {
        height: '2.5rem',
        borderRadius: borderRadius.xs,
      },
    },
  },
  defaultVariants: {
    size: 'medium',
    isError: false,
  },
});

export const buttonText = style({
  ...fontVariant.label2,
  color: color.primary,
  selectors: {
    [`${buttonBase}:disabled  &`]: {
      color: color.disable,
    },
  },
});

const TOP_PLACEMENT = {
  top: 'auto',
  bottom: '100%',
  marginTop: 0,
  marginBottom: space.sm,
} as const;

const BOTTOM_PLACEMENT = {
  top: '100%',
  bottom: 'auto',
  marginTop: space.sm,
  marginBottom: 0,
} as const;

const CENTER_PLACEMENT = {
  left: '50%',
  transform: 'translate(-50%, 0)',
} as const;

export const menu = recipe({
  base: {
    position: 'absolute',
    padding: space.sm,
    background: color.white,
    borderRadius: borderRadius.sm,
    color: color.primary,
    width: '100%',
    boxShadow: '0px 7px 14px -7px rgba(0, 0, 0, 0.04), 0px 28px 42px rgba(0, 0, 0, 0.04)',
    zIndex: zIndices.dropdown,
    maxHeight: '300px',
    minWidth: 'max-content',
    overflow: 'auto',
    selectors: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
  variants: {
    placement: {
      topLeft: {
        ...TOP_PLACEMENT,
        left: 0,
      },
      top: {
        ...TOP_PLACEMENT,
        ...CENTER_PLACEMENT,
      },
      topRight: {
        ...TOP_PLACEMENT,
        right: 0,
      },
      bottomLeft: {
        ...BOTTOM_PLACEMENT,
        left: 0,
      },
      bottom: {
        ...BOTTOM_PLACEMENT,
        ...CENTER_PLACEMENT,
      },
      bottomRight: {
        ...BOTTOM_PLACEMENT,
        right: 0,
      },
    },
    open: {
      true: {},
      false: {
        display: 'none',
      },
    },
  },
  defaultVariants: {
    placement: 'bottom',
  },
});

export const item = recipe({
  base: {
    ...fontVariant.label2,
    margin: '0',
    listStyleType: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borderRadius.sm,
  },
  variants: {
    selected: {
      true: {
        backgroundColor: 'rgba(28, 26, 66, 0.1)',
      },
      false: {
        selectors: {
          '&:hover': {
            backgroundColor: 'rgba(28, 26, 66, 0.04)',
          },

          '&:active': {
            borderRadius: borderRadius.sm,
            backgroundColor: 'rgba(28, 26, 66, 0.1)',
          },
        },
      },
    },
    size: {
      medium: {
        padding: `${space.md} ${space.lg}`,
      },
      small: {
        padding: `${space.md} ${space.md}`,
      },
    },
  },
  defaultVariants: {
    selected: false,
    size: 'small',
  },
});

export const modal = recipe({
  base: {
    padding: space.sm,
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 40px)',
    boxShadow: '0px 7px 14px -7px rgba(0, 0, 0, 0.04), 0px 28px 42px rgba(0, 0, 0, 0.04)',
    background: color.white,
    borderRadius: borderRadius.sm,
    zIndex: zIndices.modal,
    maxHeight: sizeProp('540px'),
    overflowY: 'scroll',
    selectors: {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
  variants: {
    open: {
      true: {},
      false: {
        display: 'none',
      },
    },
  },
});

export const checkedIconColor = style({
  color: color.grey500,
});

export type MenuVariant = RecipeVariants<typeof menu>;
export type ButtonVariant = RecipeVariants<typeof buttonVariant>;
export type Size = NonNullable<ButtonVariant>['size'];
export type Placement = NonNullable<MenuVariant>['placement'];
