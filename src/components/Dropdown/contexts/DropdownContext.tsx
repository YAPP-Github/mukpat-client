'use client';

import { useRef, useContext, createContext, ReactNode, RefObject } from 'react';
import useDropdownOpenState, { type OpenState } from '../hooks/useDropdownOpenState';

interface DropdownContextValue {
	openState: OpenState;
	toggleRef: RefObject<HTMLButtonElement>;
	toggleDropdown: () => void;
	closeDropdown: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

const DropdownContextProvider = ({ children }: { children: ReactNode }) => {
	const toggleRef = useRef<HTMLButtonElement>(null);

	const { openState, toggleDropdown, closeDropdown } = useDropdownOpenState(toggleRef);

	return (
		<DropdownContext.Provider value={{ openState, toggleRef, toggleDropdown, closeDropdown }}>
			{children}
		</DropdownContext.Provider>
	);
};

const useDropdownContext = () => {
	const ctx = useContext(DropdownContext);
	if (!ctx) throw new Error('Cannot find DropdownContext. It should be wrapped within DropdownContextProvider.');
	return ctx;
};

export { DropdownContextProvider, useDropdownContext };
