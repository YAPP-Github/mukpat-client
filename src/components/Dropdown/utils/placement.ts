import { Placement } from '../Dropdown.css';

const TOP = 'top';
const BOTTOM = 'bottom';

const LEFT = 'Left';
const RIGHT = 'Right';
const CENTER = '';

type PlacementValues = Exclude<Placement, undefined>;

/**
 * 사용자가 지정한 placement와 시스템이 결정한 y축 placement를 비교하여 알맞은 Placement 값을 반환하는 유틸함수
 * @param userPlacement - 사용자가 지정한 placement
 * @param systemYPlacement - 시스템이 결정한 y축 placement
 * @returns Placement
 */
const getComputedPlacement = (userPlacement: PlacementValues, systemYPlacement: 'top' | 'bottom') => {
	const xUserPlacement = userPlacement.includes(LEFT) ? LEFT : userPlacement.includes(RIGHT) ? RIGHT : CENTER;
	const yUserPlacement = userPlacement.includes(TOP) ? TOP : BOTTOM;
	return ((systemYPlacement === BOTTOM ? yUserPlacement : systemYPlacement) + xUserPlacement) as PlacementValues;
};

export { getComputedPlacement };
