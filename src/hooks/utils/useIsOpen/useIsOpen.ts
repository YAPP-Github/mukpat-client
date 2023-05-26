import { useState } from 'react';

export default function useIsOpen() {
	const [isOpen, setIsOpen] = useState(false);

	return {
		isOpen,
		setIsOpen,
	};
}
