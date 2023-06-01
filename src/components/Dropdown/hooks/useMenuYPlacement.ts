import { useState, useRef, useLayoutEffect, useCallback } from 'react';

const MIN_Y_INTERVAL = 40;

const useMenuYPlacement = (isOpen: boolean) => {
	const [yplacement, setYplacement] = useState<'top' | 'bottom'>('bottom');
	const menuRef = useRef<HTMLUListElement>(null);

	const needChangeYPlacement = useCallback(() => {
		if (!menuRef.current) return false;
		const toggleRect = menuRef.current.getBoundingClientRect();
		const spaceBelow = window.innerHeight - toggleRect.bottom;

		return (
			spaceBelow < MIN_Y_INTERVAL ||
			(yplacement === 'top' && spaceBelow > menuRef.current.clientHeight + MIN_Y_INTERVAL)
		);
	}, [yplacement]);

	useLayoutEffect(() => {
		if (isOpen && needChangeYPlacement()) {
			setYplacement((prev) => (prev === 'bottom' ? 'top' : 'bottom'));
		}
	}, [isOpen, needChangeYPlacement]);

	return { menuRef, yplacement };
};

export default useMenuYPlacement;
