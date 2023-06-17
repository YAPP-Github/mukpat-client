import Typography from '../Typography/Typography';
import { useFormContext } from 'react-hook-form';

type errorProps = {
	name: string;
	showError?: boolean;
};

const InputErrorMessage = ({ name, showError = true }: errorProps) => {
	const { formState } = useFormContext();
	const errorMessage = showError && (formState.errors[name]?.message as string);

	return (
		<Typography style={{ marginTop: '8px' }} color="red500" variant="label5" as="p">
			{errorMessage}
		</Typography>
	);
};

export default InputErrorMessage;
