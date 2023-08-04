import { themeTokens } from '@/styles/theme.css';
import { fontVariant } from '@/styles/variant.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

const { fontSize, fontWeight, lineHeights, borderRadius, color } = themeTokens;

export const colorVariant = {
  purple: { background: color.purple500, color: color.purple800 },
  pink: { background: color.pink500, color: color.pink800 },
  orange: { background: color.orange500, color: color.orange800 },
  yellow: { background: color.yellow500, color: color.yellow800 },
  skyblue: { background: color.skyblue500, color: color.skyblue800 },
  grey: { background: color.grey200, color: color.sub },
};

export const sizeVariant = {
  small: { width: 40, height: 40 },
  medium: { width: 48, height: 48 },
  full: { width: '100%', height: '100%' },
};

export const fontSizeVariant = {
  large: {
    ...fontVariant.title3,
  },
  medium: {
    fontSize: fontSize['sm'],
    fontWeight: fontWeight['semibold'],
    lineHeight: lineHeights['2xs'],
  },
  small: {
    ...fontVariant.label5,
  },
};

export const wrapper = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius['circle'],
    flexShrink: 0,
    position: 'relative',
  },
  variants: {
    color: colorVariant,
    size: sizeVariant,
    fontSize: fontSizeVariant,
  },
  defaultVariants: {
    color: 'grey',
    size: 'small',
    fontSize: 'medium',
  },
});

type ProfileVariants = NonNullable<RecipeVariants<typeof wrapper>>;
export type ProfileColor = ProfileVariants['color'];
export type ProfileSize = ProfileVariants['size'];
export type ProfileFontSize = ProfileVariants['fontSize'];
