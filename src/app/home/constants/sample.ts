import { BoardListItem } from '@/api/types';
import {
  SAMPLE_BOARDDETAIL_1,
  SAMPLE_BOARDDETAIL_2,
  SAMPLE_BOARDDETAIL_3,
  SAMPLE_BOARDDETAIL_4,
} from '@/app/board/constants/sample';
import { format, addDays } from 'date-fns';
import { ko } from 'date-fns/locale';

export const SAMPLE_BOARD_LISTITEMS: BoardListItem[] = [
  {
    boardId: SAMPLE_BOARDDETAIL_1.boardId,
    title: SAMPLE_BOARDDETAIL_1.title,
    status: SAMPLE_BOARDDETAIL_1.status,
    todayOrTomorrow: '오늘',
    meetingDateTime: `${format(new Date(), 'MM월 dd일 (eee)', {
      locale: ko,
    })} ${SAMPLE_BOARDDETAIL_1.meetingTime}`,
    meetingPlace: SAMPLE_BOARDDETAIL_1.locationName,
    maxApply: SAMPLE_BOARDDETAIL_1.maxApply,
    currentApply: SAMPLE_BOARDDETAIL_1.currentApply,
    participants: SAMPLE_BOARDDETAIL_1.participants,
  },
  {
    boardId: SAMPLE_BOARDDETAIL_2.boardId,
    title: SAMPLE_BOARDDETAIL_2.title,
    status: SAMPLE_BOARDDETAIL_2.status,
    todayOrTomorrow: '내일',
    meetingDateTime: `${format(addDays(new Date(), 1), 'MM월 dd일 (eee)', {
      locale: ko,
    })} ${SAMPLE_BOARDDETAIL_2.meetingTime}`,
    meetingPlace: SAMPLE_BOARDDETAIL_2.locationName,
    maxApply: SAMPLE_BOARDDETAIL_2.maxApply,
    currentApply: SAMPLE_BOARDDETAIL_2.currentApply,
    participants: SAMPLE_BOARDDETAIL_2.participants,
  },
  {
    boardId: SAMPLE_BOARDDETAIL_3.boardId,
    title: SAMPLE_BOARDDETAIL_3.title,
    status: SAMPLE_BOARDDETAIL_3.status,
    todayOrTomorrow: null,
    meetingDateTime: `${format(addDays(new Date(), 3), 'MM월 dd일 (eee)', {
      locale: ko,
    })} ${SAMPLE_BOARDDETAIL_3.meetingTime}`,
    meetingPlace: SAMPLE_BOARDDETAIL_3.locationName,
    maxApply: SAMPLE_BOARDDETAIL_3.maxApply,
    currentApply: SAMPLE_BOARDDETAIL_3.currentApply,
    participants: SAMPLE_BOARDDETAIL_3.participants,
  },
  {
    boardId: SAMPLE_BOARDDETAIL_4.boardId,
    title: SAMPLE_BOARDDETAIL_4.title,
    status: SAMPLE_BOARDDETAIL_4.status,
    todayOrTomorrow: null,
    meetingDateTime: `${format(addDays(new Date(), 3), 'MM월 dd일 (eee)', {
      locale: ko,
    })} ${SAMPLE_BOARDDETAIL_4.meetingTime}`,
    meetingPlace: SAMPLE_BOARDDETAIL_4.locationName,
    maxApply: SAMPLE_BOARDDETAIL_4.maxApply,
    currentApply: SAMPLE_BOARDDETAIL_4.currentApply,
    participants: SAMPLE_BOARDDETAIL_4.participants,
  },
];
