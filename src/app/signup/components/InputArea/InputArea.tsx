'use client';
import { Input, InputSection } from '@/components';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { inputWrapper } from './InputArea.css';
import { HTMLAttributes } from 'react';
import cx from 'classnames';

type InputAreaProps = {
  label: string;
  name: string;
  placeholder: string;
  required: boolean;
  method: UseFormReturn<FieldValues>;
  type?: 'search' | 'title' | 'textArea' | 'password';
} & HTMLAttributes<HTMLDivElement>;

const InputArea = ({ label, name, placeholder, required, method, type, className }: InputAreaProps) => {
  return (
    <div className={cx(inputWrapper, className)}>
      <InputSection label={label} variant="label3" color="sub" direction="column" required={required}>
        <Input {...method.register(name)} name={name} placeholder={placeholder} showError={true} type={type} />
      </InputSection>
    </div>
  );
};

export default InputArea;
