'use client';

import { useContext, createContext, ReactNode, RefObject, useMemo } from 'react';
import useDropdownOpenState from '../hooks/useDropdownOpenState';
import useMenuYPlacement from '../hooks/useMenuYPlacement';

interface DropdownContextValue {
	/** dropdown의 열림/닫힘 상태 */
	isOpen: boolean;
	/** dropdown toggle 역할을 하는 요소의 ref */
	menuRef: RefObject<HTMLUListElement>;
	/** dropdown의 상하 위치 값 */
	yplacement: 'top' | 'bottom';
	/** dropdown toggle 함수 */
	toggleDropdown: () => void;
	/** dropdown close 함수 */
	closeDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

const DropdownContextProvider = ({ children }: { children: ReactNode }) => {
	const { isOpen, toggleDropdown, closeDropdown } = useDropdownOpenState();
	const { menuRef, yplacement } = useMenuYPlacement(isOpen);

	const contextValue = useMemo(
		() => ({ isOpen, menuRef, yplacement, toggleDropdown, closeDropdown }),
		[isOpen, menuRef, yplacement, toggleDropdown, closeDropdown],
	);

	return <DropdownContext.Provider value={contextValue}>{children}</DropdownContext.Provider>;
};

const useDropdownContext = () => {
	const ctx = useContext(DropdownContext);
	if (!ctx) throw new Error('Cannot find DropdownContext. It should be wrapped within DropdownContextProvider.');
	return ctx;
};

export { DropdownContextProvider, useDropdownContext };
