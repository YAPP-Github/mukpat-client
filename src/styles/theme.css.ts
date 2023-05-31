import { createGlobalTheme } from '@vanilla-extract/css';

export const themeTokens = createGlobalTheme(':root', {
	space: {
		'3xs': '0.125rem', //2px
		'2xs': '0.25rem', //4px
		xs: '0.375rem', //6px
		sm: '0.5rem', //8px
		md: '0.75rem', //12px
		lg: '1rem', //16px
		xl: '1.25rem', //20px
		'2xl': '1.5rem', //24px
		'3xl': '2rem', //32px
		'4xl': '2.5rem', //40px
		'5xl': '3rem', //48px
		'6xl': '4rem', //64px
		'7xl': '5rem', //80px
		none: '0px',
	},
	borderRadius: {
		'2xs': '4px',
		xs: '8px',
		sm: '12px',
		md: '14px',
		lg: '16px',
		xl: '20px',
		pill: '999px',
		circle: '50%',
	},
	fontSize: {
		'3xs': '0.688rem', //11px
		'2xs': '0.75rem', //12px
		xs: '0.813rem', //13px
		sm: '0.875rem', //14px
		md: '1rem', //16px
		lg: '1.125rem', //18px
		xl: '1.25rem', //20px
		'2xl': '1.375rem', //22px
		'3xl': '1.5rem', //24px
		'4xl': '1.75rem', //28px
		'5xl': '2rem', //32px
		'6xl': '2.25rem', //36px
		'7xl': '2.5rem', //40px
		'8xl': '2.875rem', //46px
		'9xl': '3.25rem', //52px
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
		white: '#ffffff',
		black: '#0F172A',
		grey50: '#F8FAFC',
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
		skyblue500: '#22B1FF',
		skyblue800: '#0070AD',

		// purple
		purple200: '#DFBEFF',
		purple500: '#80D2FF',
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
		'4xs': '0.875rem', //14px
		'3xs': '1rem', //16px
		'2xs': '1.125rem', //18px
		xs: '1.250rem', //20px
		sm: '1.375rem', // 22px
		md: '1.5rem', //24px
		lg: '1.75rem', //28px
		xl: '1.875rem', //30px
		'2xl': '2.25rem', //36px
		'3xl': '2.625rem', //42px
		'4xl': '2.875rem', //46px
		'5xl': '3.25rem', //52px
		'6xl': '3.75rem', //60px
		'7xl': '4rem', //64px
	},
});
