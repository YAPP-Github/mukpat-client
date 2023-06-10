import { useFormContext } from 'react-hook-form';
import Typography from '../Typography/Typography';

type errorProps = {
	message?: string;
};

const FormErrorMessage = ({ message = '필수 항목을 입력하세요.' }: errorProps) => {
	const { formState } = useFormContext();
	return (
		<div>
			{formState.isSubmitted && !formState.isValid && (
				<Typography color="red500" variant="label5" as="label">
					{message}
				</Typography>
			)}
		</div>
	);
};

export default FormErrorMessage;
