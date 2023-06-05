import { useState, useRef, useLayoutEffect, useCallback } from 'react';

const MIN_Y_INTERVAL = 40;

/**
 *
 * @param {boolean} isOpen - 메뉴가 열려있는지 여부
 */

const useMenuYPlacement = (isOpen: boolean) => {
	const [yplacement, setYplacement] = useState<'top' | 'bottom'>('bottom');
	const toggleRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLUListElement>(null);

	const isBottomPlaceable = useCallback(() => {
		if (!menuRef.current || !toggleRef.current) return false;
		const menuRect = menuRef.current.getBoundingClientRect();
		const toggleRect = toggleRef.current.getBoundingClientRect();
		const spaceBelowToggle = window.innerHeight - toggleRect.bottom;

		const menuHeight = menuRect.height;
		const { marginBottom: menuMarginBottom, marginTop: menuMarginTop } = getComputedStyle(menuRef.current);
		const spaceMenuNeeds = parseInt(menuMarginBottom) + parseInt(menuMarginTop) + menuHeight + MIN_Y_INTERVAL;

		return spaceBelowToggle > spaceMenuNeeds;
	}, []);

	useLayoutEffect(() => {
		if (isOpen) {
			setYplacement(isBottomPlaceable() ? 'bottom' : 'top');
		}
	}, [isOpen, isBottomPlaceable]);

	return { toggleRef, menuRef, yplacement };
};

export default useMenuYPlacement;
