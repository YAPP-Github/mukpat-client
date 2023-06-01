import { IconType, getIconUrl, icons } from './getIconUrl';

describe('getIconUrl Utils Test', () => {
	test('적절한 icon url 반환', () => {
		const iconType: IconType = 'check';
		const status = 'default';
		const expectedUrl = `${icons.check}default.svg`;
		const result = getIconUrl(iconType, status);
		expect(result).toBe(expectedUrl);
	});

	test('잘못된 아이콘 유형인경우 빈배열 반환', () => {
		const iconType: IconType = 'invalidIcon';
		const status = 'default';
		const result = getIconUrl(iconType, status);
		expect(result).toBe('');
	});
});
