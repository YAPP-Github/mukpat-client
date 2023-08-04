'use client';

import { InputDropdown, InputSection } from '@/components';
import { TIMELIST_AM, TIMELIST_PM, TIME_SELECT } from '../../constants';
import { useFormContext } from 'react-hook-form';
import { wrapper } from './TimeDropDown.css';

const TimeDropDown = () => {
  const { control, getValues } = useFormContext();

  return (
    <div>
      <InputSection label="시간" direction="row" required={true}>
        <div className={wrapper}>
          <InputDropdown
            title={'시간선택'}
            control={control}
            name={'timezone'}
            placeholder="오후"
            selections={TIME_SELECT}
          ></InputDropdown>
          <InputDropdown
            title={'시간선택'}
            control={control}
            name={'meetingTime'}
            placeholder="12:00"
            selections={getValues('timezone') == '오전' ? TIMELIST_AM : TIMELIST_PM}
          ></InputDropdown>
        </div>
      </InputSection>
    </div>
  );
};

export default TimeDropDown;
