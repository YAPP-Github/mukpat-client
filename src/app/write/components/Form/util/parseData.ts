import dayjs from 'dayjs';
import { ParsedData } from '@/app/write/types';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseData = (data: ParsedData) => {
  const date = dayjs(data.meetingDate).format('YYYY-MM-DD');
  const time = data.meetingTime.substr(-5);
  data = {
    ...data,
    meetingDate: date,
    meetingTime: time,
  };
  console.log(data);

  return data;
};

export default parseData;
