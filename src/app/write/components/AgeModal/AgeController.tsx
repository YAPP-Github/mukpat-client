import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { AGE_LIST } from '@/app/write/constants';

type ControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: string;
  placeholder: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AgeController = ({ control, name, placeholder }: ControllerProps<any>) => {
  return (
    <Controller
      defaultValue={null}
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Dropdown style={{ width: '100%' }}>
          <DropdownButton placeholder={placeholder}>{value && `${value}세`}</DropdownButton>
          <DropdownMenu selectable selectedItemKey={value} onSelectChange={onChange}>
            {AGE_LIST.map((v) => (
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
