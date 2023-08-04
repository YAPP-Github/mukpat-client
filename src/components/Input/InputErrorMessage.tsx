import Typography from '../Typography/Typography';
import { useFormContext } from 'react-hook-form';
import { fixedError } from './Input.css';

type errorProps = {
  name: string;
  showError?: boolean;
  fix?: boolean;
};

const InputErrorMessage = ({ name, showError = true, fix = false }: errorProps) => {
  const { formState } = useFormContext();
  const errorMessage = showError && (formState.errors[name]?.message as string);

  return (
    <div className={fixedError({ fix })}>
      <Typography style={{ marginTop: '8px' }} color="red500" variant="label5" as="p">
        {errorMessage}
      </Typography>
    </div>
  );
};

export default InputErrorMessage;
