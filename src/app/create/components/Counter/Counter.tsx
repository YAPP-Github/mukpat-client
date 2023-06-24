import { IconButton } from '@/components';
import { useCallback } from 'react';
import { counterWrapper } from './Counter.css';
import { FieldValues, FieldPath, Controller, Control } from 'react-hook-form';
import { HTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type CounterProps<T extends FieldValues> = {
  min?: number;
  max?: number;
  control: Control<T>;
  name: FieldPath<T>;
} & HTMLAttributes<HTMLDivElement>;

const Counter = ({ control, name, min = 2, max = 20, ...rest }: CounterProps<any>) => {
  const { setValue, getValues } = useFormContext();
  const handleClickAdd = useCallback(() => setValue(name, getValues(name) + 1), [getValues, name, setValue]);
  const handleClickSubtract = useCallback(() => setValue(name, getValues(name) - 1), [getValues, name, setValue]);

  return (
    <div className={counterWrapper} {...rest}>
      <Controller
        defaultValue={2}
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <>
            <IconButton type="button" iconType="minus" onClick={handleClickSubtract} disabled={value <= 2} />
            <input type="number" min={min} max={max} value={value} onChange={onChange} />
            <IconButton type="button" iconType="plus" onClick={handleClickAdd} />
          </>
        )}
      />
    </div>
  );
};

export default Counter;
