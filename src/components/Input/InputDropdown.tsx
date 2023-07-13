'use client';
import { FieldValues, FieldPath, Controller, Control } from 'react-hook-form';
import { Dropdown } from '@/components';
import InputErrorMessage from './InputErrorMessage';
import { inputWrapper } from './Input.css';
import { HTMLAttributes } from 'react';
import { useIsMobile } from '@/hooks';

type TControl<T extends FieldValues> = {
  control: Control<T>;
  /** Input을 구분짓는 고유한 이름입니다. 한 폼안에는 오직 하나의 이름만이 존재해야 합니다. name을 전달해야 form validation이 가능합니다. */
  name: FieldPath<T>;
  /**  유효성검사에서 해당 Input이 invalid할 경우 error message의 표시 여부를 설정합니다. @default true*/
  showError?: boolean;
  /** Dropdown 아이템의 리스트입니다. */
  selections?: string[];
  /** 모바일 BottomSheet DropDown에 해당하는 타이틀입니다. */
  title?: string;
} & HTMLAttributes<HTMLDivElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputDropdown = ({ ...props }: TControl<any>) => {
  const { name, control, placeholder, showError = true, selections = ['default'], title } = props;
  const mobile = useIsMobile();

  return (
    <div className={inputWrapper}>
      <Controller
        defaultValue={null}
        control={control}
        name={name}
        render={({ field: { value, onChange }, fieldState }) => (
          <Dropdown>
            <Dropdown.Button
              type="button"
              isError={Boolean(fieldState.error)}
              placeholder={placeholder}
              style={{ width: '100%' }}
            >
              {value}
            </Dropdown.Button>
            {mobile ? (
              <Dropdown.BottomSheet title={title} selectable selectedItemKey={value} onSelectChange={onChange}>
                {selections.map((v) => (
                  <Dropdown.Item key={v} itemKey={v}>
                    {v}
                  </Dropdown.Item>
                ))}
              </Dropdown.BottomSheet>
            ) : (
              <Dropdown.Menu selectable selectedItemKey={value} onSelectChange={onChange}>
                {selections.map((v) => (
                  <Dropdown.Item key={v} itemKey={v}>
                    {v}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            )}
          </Dropdown>
        )}
      />
      <InputErrorMessage name={name} showError={showError} />
    </div>
  );
};

export default InputDropdown;
