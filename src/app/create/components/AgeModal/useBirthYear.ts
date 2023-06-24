import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';

const useBirthYear = () => {
  const { getValues } = useFormContext();
  const year = dayjs().year();
  const min = parseInt(getValues('minAge')) || 20;
  const max = parseInt(getValues('maxAge')) || 30;
  const minBirthYear = (year - min).toString().slice(2, 4);
  const maxBirthYear = (year - max).toString().slice(2, 4);
  return { minBirthYear, maxBirthYear };
};

export default useBirthYear;
