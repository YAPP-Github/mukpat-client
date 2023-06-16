'use client';

import { Typography, IconButton } from '@/components';
import { useNavigation, CaptionProps } from 'react-day-picker';
import { caption, captionButtons } from './DateInput.css';
import { yearMonthCaption } from './utils/caption';

const DateFormatCaption = ({ displayMonth }: CaptionProps) => {
	const { goToMonth, nextMonth, previousMonth } = useNavigation();
	return (
		<div className={caption}>
			<Typography as="h4" variant="title2">
				{yearMonthCaption(displayMonth)}
			</Typography>
			<div className={captionButtons}>
				<IconButton
					iconType="chevronleft"
					width={32}
					height={32}
					disabled={!previousMonth}
					onClick={() => previousMonth && goToMonth(previousMonth)}
					active={false}
				/>
				<IconButton
					iconType="chevronright"
					width={32}
					height={32}
					disabled={!nextMonth}
					onClick={() => nextMonth && goToMonth(nextMonth)}
					active={false}
				/>
			</div>
		</div>
	);
};

export default DateFormatCaption;
