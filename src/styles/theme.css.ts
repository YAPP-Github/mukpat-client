import { createGlobalTheme, createGlobalThemeContract, createTheme, createThemeContract } from '@vanilla-extract/css';

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
		sm: '400',
		md: '700',
	},
	color: {
		brand: {
			50: '#EEF2FF',
			100: '#E0E7FF',
			200: '#C7D2FE',
			300: '#A5B4FC',
			400: '#818CF8',
			500: '#5568F9',
			600: '#2B50DC',
			700: '#0039BF',
			800: '#0024A3',
			900: '#001288',
		},
		grey: {
			50: '#FAFAFB',
			100: '#F1F5F9',
			200: '#E2E8F0',
			250: '#D1D6DC',
			300: '#CBD5E1',
			400: '#94A3B8',
			500: '#64748B',
			600: '#475569',
			700: '#334155',
			800: '#1E293B',
		},
		blue: {
			200: '#C2EAFF',
			500: '#22B1FF',
			800: '#007EC2',
		},
		purple: {
			200: '#DFBEFF',
			500: '#D25ED0',
			800: '#FF5DA0',
		},
		pink: {
			200: '#FF5DA0',
			500: '#D25ED0',
			800: '#FF5DA0',
		},
		yellow: {
			200: '#FFDE9E',
			500: '#FFC658',
			800: '#E79800',
		},
		orange: {
			200: '#FFB9A7',
			500: '#FF8D70',
			800: '#D44926',
		},
		red: {
			200: '#FF5353',
			500: '#EE3A3A',
			800: '#CD1D1D',
		},
		white: '#1E293B',
		black: '#0F172A',
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
		'3xs': '0.875rem', //14px
		'2xs': '1rem', //16px
		xs: '1.125rem', //18px
		sm: '1.250rem', //20px
		md: '1.5rem', //22px
		lg: '1.75rem', //24px
		xl: '1.875rem', //28px
		'2xl': '2.25rem', //30px
		'3xl': '2.625rem', //36px
		'4xl': '2.875rem', //42px
		'5xl': '3.25rem', //46px
		'6xl': '3.75rem', //52px
		'7xl': '4rem', //60px
	},
});
