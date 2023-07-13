'use client';

import dayjs from 'dayjs';
import { HTMLAttributes } from 'react';
import { FieldValues, FieldPath, Controller, Control } from 'react-hook-form';
import { DateInput, DayPicker, BottomSheet } from '@/components';
import { inputWrapper } from '@/components/Input/Input.css';
import { useOverlay, useIsMobile } from '@/hooks';
import { preventClick } from './InputDate.css';

type TControl<T extends FieldValues> = {
  /**  Input을 제어하는 컨트롤입니다. */
  control: Control<T>;
  /**  Input을 구분짓는 고유한 이름입니다. 한 폼 안에는 오직 하나의 이름만이 존재해야 합니다. */
  name: FieldPath<T>;
  /** 유효성검사에서 해당 Input이 invalid할 경우 error message의 표시 여부를 설정합니다. @default true*/
  showError?: boolean;
} & HTMLAttributes<HTMLDivElement>;

interface FieldProps {
  value: Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputDate = ({ ...props }: TControl<any>) => {
  const mobile = useIsMobile();
  const [openBottomSheet, closeBottomSheet] = useOverlay();

  const { name, control } = props;
  const now = dayjs().format('YYYY년 MM월 DD일 (오늘)');

  const renderBottomSheet = ({ value, onChange }: FieldProps) => {
    return (
      <BottomSheet onClose={closeBottomSheet} title={'날짜 선택'}>
        <DayPicker selected={value} onSelect={onChange}></DayPicker>
      </BottomSheet>
    );
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <div
          className={inputWrapper}
          onClick={() => {
            mobile && openBottomSheet(renderBottomSheet({ value, onChange }));
          }}
        >
          <DateInput className={preventClick} placeholder={now} selected={value} onSelect={onChange}></DateInput>
        </div>
      )}
    />
  );
};

export default InputDate;
