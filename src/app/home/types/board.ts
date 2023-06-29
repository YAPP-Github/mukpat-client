import { Profile } from '@/types/data';

export interface BoardListItem {
  boardId: number;
  title: string;
  status: string;
  todayOrTomorrow: string;
  elapsedTime: string;
  meetingDateTime: string;
  meetingPlace: string;
  maxApply: number;
  currentApply: number;
  participants: Profile[];
}

export interface BoardListResponse {
  list: BoardListItem[];
  lastId: number;
}

export interface BoardListPagingData {
  data: BoardListItem[];
  lastId: number;
  isLastPage: boolean;
}
