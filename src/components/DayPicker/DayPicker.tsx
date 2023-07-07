'use client';

import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';
import { DayPicker as ReactDayPicker, DayPickerSingleProps } from 'react-day-picker';
import DateCaption from './DateCaption';
import { calendar } from './DayPicker.css';

interface Props extends Omit<DayPickerSingleProps, 'mode'> {
  mode?: 'single';
}

const DayPicker = ({ mode = 'single', ...props }: Props) => {
  return (
    <ReactDayPicker
      {...props}
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
    />
  );
};

export default DayPicker;
