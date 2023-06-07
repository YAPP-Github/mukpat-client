import { useState, useCallback } from 'react';

const useBooleanState = (initialValue = false) => {
	const [bool, setBool] = useState(initialValue);

	const setTrue = useCallback(() => {
		setBool(true);
	}, []);

	const setFalse = useCallback(() => {
		setBool(false);
	}, []);

	const toggle = useCallback(() => {
		setBool((b) => !b);
	}, []);

	return [bool, setTrue, setFalse, toggle] as const;
};

export default useBooleanState;
