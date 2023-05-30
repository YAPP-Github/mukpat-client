import { useEffect, useRef } from 'react';

interface Props {
	onClickOutside: () => void;
}

const useClickOutside = <T extends HTMLElement = HTMLElement>({ onClickOutside }: Props) => {
	const ref = useRef<T>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClickOutside();
			}
		};
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClickOutside]);

	return ref;
};

export default useClickOutside;
