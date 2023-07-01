'use client';
import { MouseEvent } from 'react';
import { Typography, Dropdown, DropdownMenu, DropdownButton, DropdownItem } from '@/components';

type CommonDropDownProps = {
  selectedValue: string | null;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
  label: string;
  placeholder: string;
  selections: string[];
};

const CommonDropDown = ({ onClick, selectedValue, label, placeholder, selections }: CommonDropDownProps) => {
  return (
    <div style={{ width: '100%' }}>
      <Typography id="gender-select" color="sub" variant="label3" as="label" required={true}>
        {label}
      </Typography>
      <Dropdown>
        <DropdownButton placeholder={placeholder}>{selectedValue}</DropdownButton>
        <DropdownMenu>
          {selections.map((item, index) => (
            <DropdownItem itemKey={item} key={index} onClick={onClick}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CommonDropDown;
