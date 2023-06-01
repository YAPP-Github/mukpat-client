import { useState, useCallback } from 'react';

const useDropdownOpenState = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeDropdown = useCallback(() => {
		setIsOpen(false);
	}, []);

	const toggleDropdown = useCallback(() => {
		setIsOpen((o) => !o);
	}, []);

	return {
		isOpen,
		closeDropdown,
		toggleDropdown,
	};
};

export default useDropdownOpenState;
