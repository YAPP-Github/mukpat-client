import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

export const wrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  variants: {
    verticalCenter: {
      true: {
        justifyContent: 'center',
      },
      false: {},
    },
  },
  defaultVariants: {
    verticalCenter: true,
  },
});

type WrapperVariant = RecipeVariants<typeof wrapper>;
export type VerticalCenter = NonNullable<WrapperVariant>['verticalCenter'];
