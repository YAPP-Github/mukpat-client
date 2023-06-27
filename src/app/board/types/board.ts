import { Profile, ResponseData } from '@/types/data';

export interface BoardDetail {
  boardId: number;
  title: string;
  status: string;
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

export type BoardDetailResponse = ResponseData<BoardDetail>;
