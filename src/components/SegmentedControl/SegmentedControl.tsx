'use client';

import { ReactNode, useId, useState, useCallback } from 'react';
import { wrapper } from './SegmentedControl.css';
import SegmentedControlItem from './SegmentedControlItem';

interface ControlData {
	value: string;
	label: ReactNode;
}

interface Props {
	/** Segmented Control을 렌더링하고자 하는 데이터 요소 {value: string, label: ReactNode}[]의 타입이 요구됨 */
	data: ControlData[];
	/** 현재 선택된 대상의 value (state) */
	value?: string;
	/** 선택되었을때 value를 변경하는 함수 (setState) */
	onChange?: (value: string) => void;
	/** SegmentedControl을 설명해줄 수 있는 label 요소의 Id */
	ariaLabelledby?: string;
}

const SegmentedControl = ({ data, value, onChange, ariaLabelledby }: Props) => {
	const layoutId = useId();
	const [selectedValue, setSelectedValue] = useState(value ?? data[0].value);

	const handleClickItem = useCallback(
		(value: string) => {
			setSelectedValue(value);
			onChange?.(value);
		},
		[onChange],
	);

	return (
		<ul aria-labelledby={ariaLabelledby} className={wrapper}>
			{data.map(({ value, label }) => (
				<SegmentedControlItem
					key={value}
					value={value}
					layoutId={layoutId}
					isSelected={selectedValue === value}
					onClick={handleClickItem}
				>
					{label}
				</SegmentedControlItem>
			))}
		</ul>
	);
};

export default SegmentedControl;
