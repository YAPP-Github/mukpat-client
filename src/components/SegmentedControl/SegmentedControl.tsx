'use client';

import { ReactNode, useId, useState, useCallback } from 'react';
import { wrapper } from './SegmentedControl.css';
import SegmentedControlItem from './SegmentedControlItem';

// [x] data를 넘겨 원하는 요소를 렌더링 할 수 있다
// - data: { value: string, label: string }[]
// [] value와 onChange를 넘겨 컨트롤할 수 있다
// [x] 다른 요소 클릭시 하이라이트 된 대상이 애니메이션 된다.

interface Data {
	value: string;
	label: ReactNode;
}

interface Props {
	data: Data[];
	value?: string;
	onChange?: (value: string) => void;
}

const SegmentedControl = ({ data, value, onChange }: Props) => {
	const layoutId = useId();
	const [selectedValue, setSelectedValue] = useState(value ?? data[0].value);

	const handleChange = useCallback(
		(value: string) => {
			setSelectedValue(value);
			onChange?.(value);
		},
		[onChange],
	);

	return (
		<ul className={wrapper}>
			{data.map(({ value, label }) => (
				<SegmentedControlItem
					key={value}
					value={value}
					layoutId={layoutId}
					isSelected={selectedValue === value}
					onChange={handleChange}
				>
					{label}
				</SegmentedControlItem>
			))}
		</ul>
	);
};

export default SegmentedControl;
