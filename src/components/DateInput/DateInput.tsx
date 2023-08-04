'use client';

import { useRef } from 'react';

import { DayPickerSingleProps, SelectSingleEventHandler } from 'react-day-picker';
import { Dropdown, DayPicker } from '@/components';
import { DropdownMenuHandle } from '@/components/Dropdown/DropdownMenu';
import { selectedDateCaption } from './utils/caption';
import { menu } from './DateInput.css';
import { useIsMobile } from '@/hooks';

interface Props extends Omit<DayPickerSingleProps, 'selected' | 'onSelect' | 'mode'> {
  /** 선택된 날짜 상태값 */
  selected: Date | undefined;
  /** 선택 날짜 변경 함수 */
  onSelect: (date: Date | undefined) => void;
  /** 선택된 날짜가 없을때 기본적으로 표시할 텍스트 */
  placeholder?: string;
  /** 에러 상태 여부 */
  isError?: boolean;
  /** */
}

const DateInput = ({ selected, onSelect, placeholder = '날짜 선택', isError, className, ...rest }: Props) => {
  const menuRef = useRef<DropdownMenuHandle>(null);
  const mobile = useIsMobile();

  const handleSelectDate: SelectSingleEventHandler = (date) => {
    onSelect(date);
    menuRef.current?.close();
  };

  return (
    <Dropdown className={className}>
      <Dropdown.Button placeholder={placeholder} isError={isError}>
        {selected ? selectedDateCaption(selected) : null}
      </Dropdown.Button>
      {mobile ? (
        <Dropdown.BottomSheet ref={menuRef} title="날짜 선택" selectable selectedItemKey={selected?.toString()}>
          <DayPicker {...rest} selected={selected} onSelect={handleSelectDate} />
        </Dropdown.BottomSheet>
      ) : (
        <Dropdown.Menu ref={menuRef} className={menu} placement="bottomRight">
          <DayPicker {...rest} selected={selected} onSelect={handleSelectDate} />
        </Dropdown.Menu>
      )}
    </Dropdown>
  );
};

export default DateInput;
