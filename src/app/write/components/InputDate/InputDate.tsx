'use client';

import dayjs from 'dayjs';
import { HTMLAttributes } from 'react';
import { FieldValues, FieldPath, Controller, Control } from 'react-hook-form';
import { DateInput } from '@/components';
import InputErrorMessage from '@/components/Input/InputErrorMessage';

type TControl<T extends FieldValues> = {
  /**  Input을 제어하는 컨트롤입니다. */
  control: Control<T>;
  /**  Input을 구분짓는 고유한 이름입니다. 한 폼 안에는 오직 하나의 이름만이 존재해야 합니다. */
  name: FieldPath<T>;
  /** 유효성검사에서 해당 Input이 invalid할 경우 error message의 표시 여부를 설정합니다. @default true*/
  showError?: boolean;
} & HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputDate = ({ ...props }: TControl<any>) => {
  const { name, control } = props;
  const now = dayjs().format('YYYY년 MM월 DD일 (오늘)');

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <>
          <DateInput placeholder={now} selected={value} onSelect={onChange} />
          <InputErrorMessage name={name} showError={true} />
        </>
      )}
    />
  );
};

export default InputDate;
