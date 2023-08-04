import { format, isTomorrow, isToday } from 'date-fns';
import { ko } from 'date-fns/locale';

const selectedDateCaption = (selected: Date) => {
  const postFix = isToday(selected) ? ' (오늘)' : isTomorrow(selected) ? ' (내일)' : '';

  return (
    format(selected, 'yyyy년 MM월 dd일', {
      locale: ko,
    }) + postFix
  );
};

export { selectedDateCaption };
