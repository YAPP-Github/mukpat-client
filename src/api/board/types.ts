import { Profile } from '@/api/user/types';

export interface BoardListItem {
  boardId: number;
  title: string;
  status: string;
  todayOrTomorrow: string | null;
  elapsedTime?: string;
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
  minAge: number | null;
  maxAge: number | null;
  userAge: number | null;
  locationName: string;
  addressName: string;
  locationDetail: string;
  x: number;
  y: number;
  views: number;
  participants: Profile[];
  isOutOfDate: boolean;
  isSample?: boolean;
}

export interface BoardProvince {
  provinceId: number;
  provinceName: string;
  sumByProvince: number;
}

export interface BoardRegion {
  cityId: number;
  cityName: string;
  sumByCity: number;
  provinces: BoardProvince[];
}

export interface BoardRegionResponse {
  list: BoardRegion[];
}

export const BOARD_STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const;

export type BoardStatus = (typeof BOARD_STATUS)[keyof typeof BOARD_STATUS];
