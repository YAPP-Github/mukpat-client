'use client';
import { useCallback, HTMLAttributes } from 'react';
import { FieldValues, FieldPath, Controller, Control, useFormContext } from 'react-hook-form';
import { IconButton } from '@/components';
import { counterWrapper } from './Counter.css';

type CounterProps<T extends FieldValues> = {
  min?: number;
  max?: number;
  control: Control<T>;
  name: FieldPath<T>;
} & HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Counter = ({ control, name, min = 2, max = 100, ...rest }: CounterProps<any>) => {
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
            <IconButton type="button" iconType="minus" onClick={handleClickSubtract} disabled={value <= 2} hover />
            <input type="number" min={min} max={max} value={value} onChange={onChange} />
            <IconButton type="button" iconType="plus" onClick={handleClickAdd} disabled={value >= 100} hover />
          </>
        )}
      />
    </div>
  );
};

export default Counter;
