import { useState, useRef, useLayoutEffect, useCallback } from 'react';

const MIN_Y_INTERVAL = 48;

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
		return spaceBelowToggle > menuHeight + MIN_Y_INTERVAL;
	}, []);

	useLayoutEffect(() => {
		if (isOpen) {
			setYplacement(isBottomPlaceable() ? 'bottom' : 'top');
		}
	}, [isOpen, isBottomPlaceable]);

	return { toggleRef, menuRef, yplacement };
};

export default useMenuYPlacement;
