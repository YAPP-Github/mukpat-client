import dayjs from 'dayjs';
import { Control, FieldValues, useWatch } from 'react-hook-form';
import { birthText, modalContent } from './AgeModal.css';
import clsx from 'clsx';

type ModalProps<T extends FieldValues> = {
  control: Control<T>;
};

const BirthYear = ({ control }: ModalProps<FieldValues>) => {
  const [min, max] = useWatch({ control, name: ['minAge', 'maxAge'] });
  if (!min || !max) {
    return <div className={clsx(modalContent, birthText)}>-</div>;
  } else {
    const year = dayjs().year();
    const minBirthYear = (year - min).toString().slice(2, 4);
    const maxBirthYear = (year - max).toString().slice(2, 4);
    return (
      <div className={clsx(modalContent, birthText)}>
        {minBirthYear}년생 - {maxBirthYear}년생
      </div>
    );
  }
};

export default BirthYear;
