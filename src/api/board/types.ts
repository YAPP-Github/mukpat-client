import { Profile } from '@/api/user/types';

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

export interface BoardDetail {
  boardId: number;
  prevId: number | null;
  nextId: number | null;
  title: string;
  status: string;
  content: string;
  chatLink: string;
  meetingDate: string;
  meetingTime: string;
  createDate: string;
  maxApply: number;
  currentApply: number;
  minAge: number;
  maxAge: number;
  locationName: string;
  x: number;
  y: number;
  locationDetail: string;
  views: number;
  participants: Profile[];
}
