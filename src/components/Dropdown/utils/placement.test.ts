import { getComputedPlacement } from './placement';

describe('getComputedPlacement 테스팅', () => {
	test('userPlacement가 top이고 systemYPlacement는 bottom일 때 top이 되어야 한다', () => {
		const userPlacement = 'top';
		const systemYPlacement = 'bottom';
		const resultPlacement = getComputedPlacement(userPlacement, systemYPlacement);
		expect(resultPlacement).toBe('top');
	});

	test('userPlacement가 bottomLeft이고 systemYPlacement는 top일 때 topLeft가 되어야 한다', () => {
		const userPlacement = 'bottomLeft';
		const systemYPlacement = 'top';
		const resultPlacement = getComputedPlacement(userPlacement, systemYPlacement);
		expect(resultPlacement).toBe('topLeft');
	});
});
