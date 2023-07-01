import { useMemo } from 'react';
import getAgeList from '@/app/write/components/AgeModal/getAgeList';
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components';
import { Control, Controller, FieldValues } from 'react-hook-form';

type ControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: string;
  defaultValue: number;
};

const AgeController = ({ control, name, defaultValue }: ControllerProps<any>) => {
  const list = useMemo(() => getAgeList(20, 100), []);
  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Dropdown style={{ width: '100%' }}>
          <DropdownButton placeholder={'20세'}>{value}세</DropdownButton>
          <DropdownMenu selectable selectedItemKey={value} onSelectChange={onChange}>
            {list.map((v) => (
              <DropdownItem key={v} itemKey={v}>
                {v}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
    />
  );
};

export default AgeController;
