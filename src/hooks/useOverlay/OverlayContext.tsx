'use client';

import { useContext, useState, useMemo, useCallback, createContext, ReactNode, Fragment } from 'react';

interface OverlayContextValue {
	openOverlay: (id: string, element: ReactNode) => void;
	closeOverlay: (id: string) => void;
}

const OverlayContext = createContext<OverlayContextValue | null>(null);

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
	const [overlays, setOverlays] = useState<Map<string, ReactNode>>(new Map());

	const openOverlay = useCallback((id: string, element: ReactNode) => {
		setOverlays((prev) => {
			const cloned = new Map(prev);
			cloned.set(id, element);
			return cloned;
		});
	}, []);

	const closeOverlay = useCallback((id: string) => {
		setOverlays((prev) => {
			const cloned = new Map(prev);
			cloned.delete(id);
			return cloned;
		});
	}, []);

	const contextValue = useMemo(() => ({ openOverlay, closeOverlay }), [openOverlay, closeOverlay]);

	return (
		<OverlayContext.Provider value={contextValue}>
			{children}
			<div id="overlay-container">
				{[...overlays.entries()].map(([key, element]) => (
					<Fragment key={key}>{element}</Fragment>
				))}
			</div>
		</OverlayContext.Provider>
	);
};

export const useOverlayContext = () => {
	const ctx = useContext(OverlayContext);
	if (!ctx) throw new Error('Cannot find OverlayContext. It should be wrapped within OverlayProvider.');
	return ctx;
};
