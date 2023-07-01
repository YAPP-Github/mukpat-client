'use client';
import { FormProvider, FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { wrapper, form } from './InputField.css';
import { HTMLAttributes } from 'react';

type InputFieldProps = {
  method: UseFormReturn<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
} & HTMLAttributes<HTMLDivElement>;

const InputField = ({ children, method, onSubmit }: InputFieldProps) => {
  return (
    <>
      <div className={wrapper}>
        <FormProvider {...method}>
          <form className={form} onSubmit={method.handleSubmit(onSubmit)}>
            {children}
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default InputField;
