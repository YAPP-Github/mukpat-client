'use client';

import { useContext, createContext, ReactNode } from 'react';

/**
 * @property {boolean} selectable - true = 선택 가능모드, false(default) = 선택 불가능모드
 * @property {string | null} selectedItemKey - 선택된 itemkey 값 (selectionMode가 selectable일때만 입력)
 * @property {(itemKey: string | null) => void} onSelectChange - 선택 state 업데이트 함수 (selectionMode가 selectable 일때만 입력)
 */

interface DropdownMenuContextValue {
	selectable: boolean;
	selectedItemKey: string | null;
	onSelectChange: (itemKey: string | null) => void;
}

const DropdownMenuContext = createContext<DropdownMenuContextValue | null>(null);

const DropdownMenuContextProvider = ({ children, value }: { children: ReactNode; value: DropdownMenuContextValue }) => {
	return <DropdownMenuContext.Provider value={value}>{children}</DropdownMenuContext.Provider>;
};

const useDropdownMenuContext = () => {
	const ctx = useContext(DropdownMenuContext);
	if (!ctx)
		throw new Error('Cannot find DropdownMenuContext. It should be wrapped within DropdownMenuContextProvider.');
	return ctx;
};

export { DropdownMenuContextProvider, useDropdownMenuContext, type DropdownMenuContextValue };
