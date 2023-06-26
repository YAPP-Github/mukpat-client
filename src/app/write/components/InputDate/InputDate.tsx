'use client';

import dayjs from 'dayjs';
import { FieldValues, FieldPath, Controller, Control } from 'react-hook-form';
import { inputWrapper } from '@/components/Input/Input.css';
import { HTMLAttributes } from 'react';
import { DateInput } from '@/components';

/**
 * @property {string} name - Input을 구분짓는 고유한 이름입니다. 한 폼안에는 오직 하나의 이름만이 존재해야 합니다. name을 전달해야 form validation이 가능합니다.
 * @property {string} placeholder: Input창에 미리 보여줄 텍스트를 설정합니다.
 * @property {string[]} selections: Dropdown 아이템의 리스트입니다.
 * @property {boolean} showError - 유효성검사에서 해당 Input이 invalid할 경우 error message의 표시 여부를 설정합니다. 기본값은 true입니다.
 */

type TControl<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  showError?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const InputDate = ({ ...props }: TControl<any>) => {
  const { name, control } = props;
  const now = dayjs().format('YYYY년 MM월 DD일 (오늘)');

  return (
    <div className={inputWrapper}>
      <Controller
        defaultValue={null}
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <DateInput placeholder={now} selected={value} onSelect={onChange}></DateInput>
        )}
      />
    </div>
  );
};

export default InputDate;
