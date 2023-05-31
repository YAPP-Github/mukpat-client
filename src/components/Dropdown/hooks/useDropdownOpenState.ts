import { useState, useCallback, RefObject } from 'react';

export interface OpenState {
	/** dropdown 열림/닫힘 여부 */
	isOpen: boolean;
	/** dropdown y축 상 위치 */
	yplacement: 'top' | 'bottom';
}

const useDropdownOpenState = <T extends HTMLElement = HTMLElement>(dropdownToggleRef: RefObject<T>) => {
	const [openState, setOpenState] = useState<OpenState>({ isOpen: false, yplacement: 'bottom' });

	/** dropdown의 상하 위치를 지정 */
	const getYPlacement = useCallback(() => {
		if (!dropdownToggleRef.current) return 'bottom';
		const toggleRect = dropdownToggleRef.current.getBoundingClientRect();
		const spaceBelow = window.innerHeight - toggleRect.bottom;
		return spaceBelow > 340 ? 'bottom' : 'top';
	}, [dropdownToggleRef]);

	const openDropdown = useCallback(() => {
		setOpenState({ yplacement: getYPlacement(), isOpen: true });
	}, [getYPlacement]);

	const closeDropdown = useCallback(() => {
		setOpenState((prev) => ({ ...prev, isOpen: false }));
	}, []);

	const toggleDropdown = useCallback(() => {
		if (openState.isOpen) {
			closeDropdown();
		} else {
			openDropdown();
		}
	}, [openState.isOpen, openDropdown, closeDropdown]);

	return {
		dropdownToggleRef,
		openState,
		openDropdown,
		closeDropdown,
		toggleDropdown,
	};
};

export default useDropdownOpenState;
