import { useState, ReactNode, useCallback } from 'react';
import { useOverlayContext } from './OverlayContext';

let overlayId = 1;

const useOverlay = () => {
	const { openOverlay, closeOverlay } = useOverlayContext();
	const [id] = useState(() => String(overlayId++));

	const open = useCallback(
		(element: ReactNode) => {
			openOverlay(id, element);
		},
		[openOverlay, id],
	);

	const close = useCallback(() => {
		closeOverlay(id);
	}, [closeOverlay, id]);

	return [open, close] as const;
};

export default useOverlay;
