import { useState, useRef, useLayoutEffect, useCallback } from 'react';

const useMenuYPlacement = (isOpen: boolean) => {
	const [yplacement, setYplacement] = useState<'top' | 'bottom'>('bottom');
	const menuRef = useRef<HTMLUListElement>(null);

	const needChangeYPlacement = useCallback(() => {
		if (!menuRef.current) return false;
		const toggleRect = menuRef.current.getBoundingClientRect();
		const spaceBelow = window.innerHeight - toggleRect.bottom;

		return spaceBelow < 40 || (yplacement === 'top' && spaceBelow > menuRef.current.clientHeight + 40);
	}, [yplacement, menuRef]);

	useLayoutEffect(() => {
		if (isOpen && menuRef.current && needChangeYPlacement()) {
			setYplacement((prev) => (prev === 'bottom' ? 'top' : 'bottom'));
		}
	}, [isOpen, needChangeYPlacement]);

	return { menuRef, yplacement };
};

export default useMenuYPlacement;
