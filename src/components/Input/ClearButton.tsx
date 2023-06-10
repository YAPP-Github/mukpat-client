'use client';

import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { clearButton } from './Input.css';
import SvgIcon from '../SvgIcon/SvgIcon';

type ClearProps = {
	name: string;
};

const ClearButton = (props: ClearProps) => {
	const { name } = props;
	const { formState, resetField } = useFormContext();
	const handleReset = useCallback(() => resetField(name, { defaultValue: '', keepDirty: false }), []);
	const isDirty = formState.dirtyFields[name];
	return (
		<button
			className={clearButton}
			disabled={!isDirty}
			onClick={handleReset}
			aria-describedby={`clear-${name}-button`}
			type="button"
		>
			<SvgIcon id="clear" width={24} height={24} />
		</button>
	);
};

export default ClearButton;
