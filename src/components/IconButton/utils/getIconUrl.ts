export type IconType = keyof typeof icons;
export const icons = {
	check: '/icons/check/',
	link: '/icons/link/',
	copy: '/icons/copy/',
	chevronleft: '/icons/chevronleft/',
	chevronright: '/icons/chevronright/',
	close: '/icons/close/',
	closelg: '/icons/close/lg-',
	dot: '/icons/dot/',
	minus: '/icons/minus/',
	plus: '/icons/plus/',
	pluslg: '/icons/plus/lg-',
	calendar: '/icons/calendar/',
	chat: '/icons/chat/',
	pin: '/icons/pin/',
	search: '/icons/search/',
};
export const getIconUrl = (iconType: IconType, status: string): string => {
	const iconMapping = icons[iconType];
	return iconMapping ? `${iconMapping}${status}.svg` : '';
};
