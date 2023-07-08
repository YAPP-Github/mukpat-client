import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { screenMQ } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';
export const title = recipe({
  base: {
    background: 'linear-gradient(90deg, #B0A4EE 0%, #738CF7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    ...fontVariant.heading2,
    width: '100%',
    '@media': {
      [screenMQ.m]: {
        ...fontVariant.title1,
        marginTop: '96px',
      },
    },
  },
  variants: {
    textAlign: {
      center: {
        textAlign: 'center',
      },
      start: {
        textAlign: 'start',
      },
      end: {
        textAlign: 'end',
      },
    },
  },
});

export type titleVariants = RecipeVariants<typeof title>;
export type TitleType = NonNullable<titleVariants>['textAlign'];
