import { format, isTomorrow, isToday } from 'date-fns';
import { ko } from 'date-fns/locale';

const yearMonthCaption = (date: Date) =>
  format(date, 'yyyy.MM', {
    locale: ko,
  });

const selectedDateCaption = (selected: Date) => {
  const postFix = isToday(selected) ? ' (오늘)' : isTomorrow(selected) ? ' (내일)' : '';

  return (
    format(selected, 'yyyy년 MM월 dd일', {
      locale: ko,
    }) + postFix
  );
};

export { yearMonthCaption, selectedDateCaption };
