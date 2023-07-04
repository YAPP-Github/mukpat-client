import { createGlobalTheme } from '@vanilla-extract/css';

export const themeTokens = createGlobalTheme(':root', {
  space: {
    /** 2px */
    '3xs': '0.125rem',
    /** 4px */
    '2xs': '0.25rem',
    /** 6px */
    xs: '0.375rem',
    /** 8px */
    sm: '0.5rem',
    /** 12px */
    md: '0.75rem',
    /** 16px */
    lg: '1rem',
    /** 20px */
    xl: '1.25rem',
    /** 24px */
    '2xl': '1.5rem',
    /** 32px */
    '3xl': '2rem',
    /** 40px */
    '4xl': '2.5rem',
    /** 48px */
    '5xl': '3rem',
    /** 64px */
    '6xl': '4rem',
    /** 80px */
    '7xl': '5rem',
    /** 0px */
    none: '0px',
  },
  borderRadius: {
    /** 4px */
    '2xs': '4px',
    /** 8px */
    xs: '8px',
    /** 12px */
    sm: '12px',
    /** 14px */
    md: '14px',
    /** 16px */
    lg: '16px',
    /** 20px */
    xl: '20px',
    /** 999px */
    pill: '999px',
    /** 50% */
    circle: '50%',
  },
  fontSize: {
    /** 11px */
    '3xs': '0.688rem',
    /** 12px */
    '2xs': '0.75rem',
    /** 13px */
    xs: '0.813rem',
    /** 14px */
    sm: '0.875rem',
    /** 16px */
    md: '1rem',
    /** 18px */
    lg: '1.125rem',
    /** 20px */
    xl: '1.25rem',
    /** 22px */
    '2xl': '1.375rem',
    /** 24px */
    '3xl': '1.5rem',
    /** 28px */
    '4xl': '1.75rem',
    /** 32px */
    '5xl': '2rem',
    /** 36px */
    '6xl': '2.25rem',
    /** 40px */
    '7xl': '2.5rem',
    /** 46px */
    '8xl': '2.875rem',
    /** 52px */
    '9xl': '3.25rem',
  },
  fontWeight: {
    regular: '400',
    semibold: '500',
    bold: '700',
  },
  color: {
    // primary
    primary50: '#EEF2FF',
    primary100: '#E0E7FF',
    primary200: '#C7D2FE',
    primary300: '#A5B4FC',
    primary400: '#818CF8',
    primary500: '#5568F9',
    primary600: '#2B50DC',
    primary700: '#0039BF',
    primary800: '#0024A3',
    primary900: '#001288',
    navy: '#1C1A42',

    // gray scale
    white: '#FFFFFF',
    black: '#0F172A',
    grey50: '#FAFAFB',
    grey100: '#F1F5F9',
    grey200: '#E2E8F0',
    grey250: '#D1D6DC',
    grey300: '#CBD5E1',
    grey400: '#94A3B8',
    grey500: '#64748B',
    grey600: '#475569',
    grey700: '#334155',
    grey800: '#1E293B',

    // skyblue
    skyblue200: '#C2EAFF',
    skyblue500: '#84D3FF',
    skyblue800: '#0070AD',

    // purple
    purple200: '#DFBEFF',
    purple500: '#C084FC',
    purple800: '#6A00D4',

    // pink
    pink200: '#FFCAE0',
    pink500: '#FE8BBA',
    pink800: '#BD004E',

    // yellow
    yellow200: '#FFDE9E',
    yellow500: '#FFC658',
    yellow800: '#A66A00',

    // orange
    orange200: '#FFB9A7',
    orange500: '#FF8D70',
    orange800: '#B92500',

    // red
    red500: '#FF5353',
    red600: '#EE3A3A',
    red700: '#CD1D1D',

    // text color
    disable: '#D1D6DC',
    hint: '#94A3B8',
    sub: '#6A737E',
    secondary: '#333D4B',
    primary: '#191F28',
  },
  zIndices: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    tooltip: '1800',
  },
  lineHeights: {
    /** 14px */
    '4xs': '0.875rem',
    /** 16px */
    '3xs': '1rem',
    /** 18px */
    '2xs': '1.125rem',
    /** 20px */
    xs: '1.250rem',
    /** 22px */
    sm: '1.375rem',
    /** 24px */
    md: '1.5rem',
    /** 28px */
    lg: '1.75rem',
    /** 30px */
    xl: '1.875rem',
    /** 36px */
    '2xl': '2.25rem',
    /** 42px */
    '3xl': '2.625rem',
    /** 46px */
    '4xl': '2.875rem',
    /** 52px */
    '5xl': '3.25rem',
    /** 60px */
    '6xl': '3.75rem',
    /** 64px */
    '7xl': '4rem',
  },
});

export const breakPoints = {
  /** mobile */
  s: 360,
  /** tablet */
  m: 791,
};

export const screenMQ = {
  /** mobile 대응 max-width: 791px*/
  m: `screen and (max-width: ${breakPoints.m}px)`,
};
