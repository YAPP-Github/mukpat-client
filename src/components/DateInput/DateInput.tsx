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
	/** 선택 모드 */
	mode?: DayPickerSingleProps['mode'];
	/** 선택된 날짜 상태값 */
	selected: Date | undefined;
	/** 선택 날짜 변경 함수 */
	onSelect: (date: Date | undefined) => void;
	/** 선택된 날짜가 없을때 기본적으로 표시할 텍스트 */
	placeholder?: string;
	/** 에러 상태 여부 */
	isError?: boolean;
}

const DateInput = ({
	mode = 'single',
	selected,
	onSelect,
	placeholder = '날짜 선택',
	isError,
	className,
	...rest
}: Props) => {
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
