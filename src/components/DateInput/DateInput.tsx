'use client';

import { useRef } from 'react';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';
import { DayPicker, DayPickerSingleProps, SelectSingleEventHandler } from 'react-day-picker';
import { Dropdown, DropdownButton, DropdownMenu } from '@/components';
import { DropdownMenuHandle } from '@/components/Dropdown/DropdownMenu';
import DateCaption from './DateCaption';
import { selectedDateCaption } from './utils/caption';
import { menu, calendar } from './DateInput.css';

interface Props extends Omit<DayPickerSingleProps, 'mode' | 'selected' | 'onSelect'> {
	mode?: DayPickerSingleProps['mode'];
	selected: Date | undefined;
	onSelect: (date: Date | undefined) => void;
	placeholder?: string;
}

const DateInput = ({ mode = 'single', selected, onSelect, placeholder = '날짜 선택', ...rest }: Props) => {
	const menuRef = useRef<DropdownMenuHandle>(null);

	const handleSelectDate: SelectSingleEventHandler = (date) => {
		onSelect(date);
		menuRef.current?.close();
	};

	return (
		<Dropdown>
			<DropdownButton placeholder={placeholder}>{selected ? selectedDateCaption(selected) : null}</DropdownButton>
			<DropdownMenu ref={menuRef} className={menu} placement="bottomRight">
				<DayPicker
					{...rest}
					className={calendar}
					components={{
						Caption: DateCaption,
					}}
					disabled={{ before: new Date() }}
					fromMonth={new Date()}
					locale={ko}
					mode={mode}
					modifiersClassNames={{
						today: 'today',
						disabled: 'disabled',
						selected: 'selected',
					}}
					onSelect={handleSelectDate}
					selected={selected}
				/>
			</DropdownMenu>
		</Dropdown>
	);
};

export default DateInput;
