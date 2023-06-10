'use client';
import { Button } from '@/components';
import { useFormContext } from 'react-hook-form';

const SubmitButton = () => {
	const { formState } = useFormContext();

	return (
		<Button style={{ width: '100%' }} type="submit" disabled={!formState.isDirty}>
			제출하기
		</Button>
	);
};

export default SubmitButton;
