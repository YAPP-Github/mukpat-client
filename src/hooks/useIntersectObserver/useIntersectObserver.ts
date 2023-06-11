// reference: https://usehooks-ts.com/react-hook/use-intersection-observer
import { useRef, useEffect, useState, useCallback } from 'react';

interface Args extends IntersectionObserverInit {
	freezeOnceVisible?: boolean;
	onIntersect?: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void;
}

const useIntersectionObserver = <T extends HTMLElement>({
	threshold = 0,
	root = null,
	rootMargin = '0%',
	freezeOnceVisible = false,
	onIntersect,
}: Args) => {
	const ref = useRef<T | null>(null);

	const [entry, setEntry] = useState<IntersectionObserverEntry>();

	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const callback = useCallback(
		([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
			setEntry(entry);
			if (entry.isIntersecting && !frozen) {
				onIntersect?.(entry, observer);
			}
		},
		[onIntersect, frozen],
	);

	useEffect(() => {
		const node = ref?.current; // DOM Ref
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observerParams = { threshold, root, rootMargin };
		const observer = new IntersectionObserver(callback, observerParams);

		observer.observe(node);

		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [JSON.stringify(threshold), root, rootMargin, frozen, callback]);

	return [ref, entry] as const;
};

export default useIntersectionObserver;
