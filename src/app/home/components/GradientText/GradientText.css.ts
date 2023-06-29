import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { themeTokens } from '@/styles/theme.css';

const { color } = themeTokens;

export const gradient = recipe({
  base: {
    userSelect: 'none',
  },
  variants: {
    color: {
      pinkBlue: {
        background: 'linear-gradient(90deg, #FFC3E3 -10.77%, #738CF7 116.21%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      bluePink: {
        background: 'linear-gradient(90deg, #738CF7 -10.77%, #FFC3E3 116.21%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      pink: {
        background: `linear-gradient(90deg, #E4B9E7, #EBBCE6)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      blue: {
        color: color.primary500,
      },
    },
  },
});

export type GradientVariants = RecipeVariants<typeof gradient>;
export type Color = NonNullable<GradientVariants>['color'];
