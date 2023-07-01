import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { fontVariant } from '@/styles/variant.css';

const { color, borderRadius, zIndices } = themeTokens;

export const modalWrapper = recipe({
  base: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 14px 28px -7px rgba(0, 0, 0, 0.04)',
    borderRadius: borderRadius.xl,
    backgroundColor: color.white,
    zIndex: zIndices.modal,
    overflow: 'auto',
    textAlign: 'center',
  },
  variants: {
    size: {
      large: {
        padding: '36px 36px 24px',
        width: '472px',
      },
      medium: {
        padding: '48px 36px 24px',
        width: '472px',
      },
      small: {
        padding: '36px 16px 16px',
        width: '320px',
      },
    },
    overflow: {
      true: {
        overflow: 'visible',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});
export const backgroundWrapper = style({
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  position: 'absolute',
  background: '#000000',
  opacity: '0.3',
  zIndex: zIndices.overlay,
});

export const headerWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
  },
  variants: {
    type: {
      info: {
        ...fontVariant.title3,
        color: color.primary,
      },
      confirm: {
        ...fontVariant.heading3,
        color: color.primary500,
      },
      input: {
        ...fontVariant.heading3,
        color: color.grey600,
      },
      infoWithClose: {
        ...fontVariant.heading3,
        color: color.primary,
        justifyContent: 'space-between',
      },
    },
  },
  defaultVariants: {
    type: 'info',
  },
});

export const contentWrapper = recipe({
  base: {},
  variants: {
    size: {
      large: {
        marginTop: '36px',
        marginBottom: '36px',
      },
      medium: {
        marginTop: '24px',
        marginBottom: '48px',
      },
      medium2: {
        marginTop: '36px',
        marginBottom: '48px',
      },
      small: {
        marginTop: '16px',
        marginBottom: '36px',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
});

export const footerWrapper = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    type: {
      single: {
        justifyContent: 'center',
      },
      horizontal: {
        justifyContent: 'space-between',
      },
      vertical: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '116px',
      },
    },
  },
  defaultVariants: {
    type: 'single',
  },
});

export type ModalVariants = RecipeVariants<typeof modalWrapper>;
export type HeaderVariants = RecipeVariants<typeof headerWrapper>;
export type ContentVariants = RecipeVariants<typeof contentWrapper>;
export type FooterVariants = RecipeVariants<typeof footerWrapper>;

export type Size = NonNullable<ModalVariants>['size'];
export type HeaderType = NonNullable<HeaderVariants>['type'];
export type ContentSize = NonNullable<ContentVariants>['size'];
export type FooterType = NonNullable<FooterVariants>['type'];
