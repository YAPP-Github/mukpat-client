import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { AGE_LIST } from '@/app/write/constants';
import DropdownModal from '@/components/Dropdown/DropdownModal';
import { useIsMobile } from '@/hooks';

type ControllerProps<T extends FieldValues> = {
  control: Control<T>;
  name: string;
  placeholder: string;
  disabled?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AgeController = ({ disabled = false, control, name, placeholder }: ControllerProps<any>) => {
  const isMobile = useIsMobile();
  const DropdownItemWrapper = isMobile ? DropdownModal : DropdownMenu;

  return (
    <Controller
      defaultValue={null}
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Dropdown style={{ width: '100%' }} disableClickOutside={isMobile}>
          <DropdownButton disabled={disabled} placeholder={placeholder}>
            {value && `${value}세`}
          </DropdownButton>
          <DropdownItemWrapper selectable selectedItemKey={value} onSelectChange={onChange}>
            {AGE_LIST.map((v) => (
              <DropdownItem key={v} itemKey={v}>
                {v}
              </DropdownItem>
            ))}
          </DropdownItemWrapper>
        </Dropdown>
      )}
    />
  );
};

export default AgeController;
