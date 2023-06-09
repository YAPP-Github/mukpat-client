import { useFormContext } from 'react-hook-form';
import Typography from '../Typography/Typography';

const ErrorMessage = () => {
	const { formState } = useFormContext();
	return (
		<div>
			{formState.isSubmitted && !formState.isValid && (
				<Typography color="red500" variant="label5" as="label">
					필수 항목을 입력하세요.
				</Typography>
			)}
		</div>
	);
};

export default ErrorMessage;
