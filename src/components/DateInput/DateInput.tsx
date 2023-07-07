'use client';

import { useRef } from 'react';

import { DayPickerSingleProps, SelectSingleEventHandler } from 'react-day-picker';
import { Dropdown, DropdownButton, DropdownMenu, DayPicker } from '@/components';
import { DropdownMenuHandle } from '@/components/Dropdown/DropdownMenu';
import { selectedDateCaption } from './utils/caption';
import { menu } from './DateInput.css';

interface Props extends Omit<DayPickerSingleProps, 'selected' | 'onSelect' | 'mode'> {
  /** 선택된 날짜 상태값 */
  selected: Date | undefined;
  /** 선택 날짜 변경 함수 */
  onSelect: (date: Date | undefined) => void;
  /** 선택된 날짜가 없을때 기본적으로 표시할 텍스트 */
  placeholder?: string;
  /** 에러 상태 여부 */
  isError?: boolean;
}

const DateInput = ({ selected, onSelect, placeholder = '날짜 선택', isError, className, ...rest }: Props) => {
  const menuRef = useRef<DropdownMenuHandle>(null);

  const handleSelectDate: SelectSingleEventHandler = (date) => {
    onSelect(date);
    menuRef.current?.close();
  };

  return (
    <Dropdown className={className}>
      <DropdownButton placeholder={placeholder} isError={isError}>
        {selected ? selectedDateCaption(selected) : null}
      </DropdownButton>
      <DropdownMenu ref={menuRef} className={menu} placement="bottomRight">
        <DayPicker {...rest} selected={selected} onSelect={handleSelectDate} />
      </DropdownMenu>
    </Dropdown>
  );
};

export default DateInput;
