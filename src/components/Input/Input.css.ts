import { globalStyle, style } from '@vanilla-extract/css';
import { themeTokens, screenMQ } from '@/styles/theme.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

const { color, space, fontSize, fontWeight, borderRadius } = themeTokens;

export const clearButton = style({
  position: 'absolute',
  right: space['lg'],
  width: space['2xl'],
  height: space['2xl'],
  border: 'none',
  background: 'transparent',
  selectors: {
    '&:disabled': {
      display: 'none',
    },
  },
});

export const section = recipe({
  variants: {
    direction: {
      column: {
        display: 'grid',
        justifyContent: 'flex-start',
        gap: space.sm,
      },
      row: {
        display: 'grid',
        gridTemplateColumns: '1fr 3fr',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media': {
          [screenMQ.m]: {
            gridAutoFlow: 'row',
            gridTemplateColumns: '1fr',
            gridGap: space.sm,
            alignItems: 'start',
          },
        },
      },
    },
  },
  defaultVariants: {
    direction: 'column',
  },
});

export const inputWrapper = style({
  width: 'inherit',
  position: 'relative',
  display: 'grid',
  alignItems: 'center',
});

export const textareaWrapper = style({
  width: 'inherit',
  display: 'grid',
  gridAutoFlow: 'row',
  gap: space.sm,
});

export const inputBase = recipe({
  base: {
    fontFamily: 'Pretendard Variable, Pretendard, -apple-system',
    minWidth: '100%',
    height: '56px',
    fontSize: fontSize.md,
    padding: space['lg'],
    paddingRight: space['4xl'],
    backgroundColor: color.grey50,
    color: color.hint,
    borderRadius: borderRadius.md,
    border: `1px solid ${color.grey100}`,
    selectors: {
      '&::-webkit-search-cancel-button': {
        display: 'none',
      },
      '&:not(:focus)': {
        color: color.primary,
      },
      '&:not(:disabled):focus': {
        color: color.primary,
        border: `1px solid ${color.primary500}`,
      },
    },
  },
  variants: {
    type: {
      textArea: {
        alignItems: 'flex-start',
        padding: '16px',
        gap: '8px',
        height: '299px',
      },
      title: {
        fontSize: fontSize.xl,
        fontWeight: fontWeight.semibold,
      },
      search: {
        paddingLeft: space['5xl'],
      },
      password: {},
    },
  },
});

export const inputError = style({
  border: `1px solid ${color.red500}`,
});

export const fixedError = recipe({
  base: {},
  variants: {
    fix: {
      true: {
        height: space.lg,
      },
    },
  },
});

globalStyle(`${clearButton} > img`, {
  margin: '0 auto',
  backgroundPosition: 'center',
});

globalStyle(`${textareaWrapper} > p`, {
  textAlign: 'end',
});

export type InputVariants = RecipeVariants<typeof inputBase>;
export type Type = NonNullable<InputVariants>['type'];

export type sectionVariants = RecipeVariants<typeof section>;
export type Direction = NonNullable<sectionVariants>['direction'];
